import ServerMock from "./server-mock";
import { Observable, of } from "rxjs";
import { ServerResponce } from "./models";

export default class MessagesApi {
  // класс для работы с API
  // Этот класс будет отвечать за выполнение
  // запросов к серверу (в нашем случае к ServerMock)
  //  с использованием rxjs/ajax

  // Эмуляция запроса к серверу с помощью ServerMock
  static getUnreadMessages(): Observable<ServerResponce> {
    // Используем of для создания Observable
    //  за место ajax.getJSON с реальным сервером
    return of(ServerMock.getUnreadMessages());
  }
}
