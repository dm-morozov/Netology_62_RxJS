// src/ts/server-mock.ts

import { faker } from "@faker-js/faker";
import { ServerResponce, Message } from "./models";

export default class ServerMock {
  // Здесь мы используем @faker-js/faker для генерации случайных данных.
  // Метод getUnreadMessages возвращает объект в формате, указанном в задании.
  // {
  //   "status": "ok",
  //   "timestamp": 1553400000,
  //   "messages": [
  //     {
  //       "id": "<uuid>",
  //       "from": "anya@ivanova",
  //       "subject": "Hello from Anya",
  //       "body": "Long message body here" ,
  //       "received": 1553108200
  //     }
  //     {
  //       "id": "<uuid>",
  //       "from": "alex@petrov",
  //       "subject": "Hello from Alex Petrov!",
  //       "body": "Long message body here",
  //       "received": 1553107200
  //     },
  //     ...
  //   ]
  // }

  static getUnreadMessages(): ServerResponce {
    const messages: Message[] = Array.from(
      { length: faker.number.int({ min: 0, max: 3 }) },
      () => ({
        id: faker.string.uuid(),
        from: faker.internet.email(),
        subject: faker.lorem.sentence(),
        body: faker.lorem.paragraph(),
        received: String(faker.date.recent({ days: 10 }).getTime() / 1000), // timestamp в секундах
      }),
    );

    return {
      status: "ok",
      timestamp: Math.floor(Date.now() / 1000), // timestamp в секундах
      messages,
    };
  }
}
