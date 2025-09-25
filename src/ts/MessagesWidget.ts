// src/ts/MessagesWidget.ts

import { Subscription } from "rxjs";
import { Message } from "./models";
import MessagesService from "./MessagesService";

export default class MessagesWidget {
  // класс для UI (MessagesWidget):
  // Этот класс будет отвечать за отображение
  // таблицы сообщений и добавление новых
  // сообщений сверху.

  private container: HTMLElement;
  private messages: Message[] = [];
  private subscription: Subscription | null = null;

  constructor(containerId: string) {
    this.container = document.querySelector(`#${containerId}`) as HTMLElement;
    if (!this.container) {
      throw new Error(`Контейнер с id ${containerId} не найден`);
    }
    this.initTable();
  }

  private initTable(): void {
    this.container.innerHTML = `
      <table border="1">
        <thead>
          <tr>
            <th>From</th>
            <th>Subject</th>
            <th>Received</th>
          </tr>
        </thead>
        <tbody class="messages-tbody"></tbody>
      </table>
    `;
  }

  private renderMessage(newMessages: Message[]): void {
    this.messages = [...newMessages, ...this.messages]; // Добавляем новые сообщения сверху
    const tbody = this.container.querySelector(".messages-tbody");
    if (!tbody) return;

    tbody.innerHTML = this.messages
      .map(
        (msg) => `
      <tr>
        <td>${msg.from}</td>
        <td>${msg.subject}</td>
        <td>${msg.received}</td>
      </tr>
    `,
      )
      .join("");
  }

  start(): void {
    this.subscription = MessagesService.getMessagesStream().subscribe({
      next: (messages) => this.renderMessage(messages),
      error: (error) => console.error("Ошибка при получении сообщений:", error),
    });
  }

  destroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
