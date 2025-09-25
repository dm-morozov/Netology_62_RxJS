// src/ts/MessagesService.ts

import { catchError, Observable, switchMap, interval, of } from "rxjs";
import { Message, ServerResponce } from "./models";
import { map } from "rxjs/operators";
import MessagesApi from "./MessagesApi";

export default class MessagesService {
  // класс для обработки данных
  // Этот класс будет использовать RxJS
  // для периодического опроса сервера и
  // обработки данных (например,
  // форматирование subject и даты).

  private static readonly POLL_INTERVAL = 5000; // Опрос каждые 5 секунд

  static getMessagesStream(): Observable<Message[]> {
    return interval(this.POLL_INTERVAL).pipe(
      switchMap(() => MessagesApi.getUnreadMessages()),
      map((response: ServerResponce) =>
        response.messages.map(this.formatMessage),
      ),
      catchError(() => of([])), // при ошибке возвращаем пустой массив
    );
  }

  private static formatMessage(message: Message): Message {
    const subject =
      message.subject.length > 15
        ? message.subject.slice(0, 15) + "..."
        : message.subject;

    const date = new Date(Number(message.received) * 1000);
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Месяцы начинаются с 0
    const year = date.getFullYear();

    const formattedDate = `${hour}:${minute} ${day}.${month}.${year}`;

    return {
      ...message,
      subject,
      received: formattedDate,
    };
  }
}
