// main.ts

// Придумывал и делал задачи с GPT, чтобы погрузиться в RxJS
import "./classwork/app";
import MessagesWidget from "./MessagesWidget";
import MessagesService from "./MessagesService";

const widget = new MessagesWidget("messages-table");
widget.start();

MessagesService.getMessagesStream().subscribe((message) =>
  console.log(message),
);
