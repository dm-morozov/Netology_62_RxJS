// src/ts/models.ts

export interface Message {
  id: string;
  from: string;
  subject: string;
  body: string;
  received: string;
}

export interface ServerResponce {
  status: string;
  timestamp: number;
  messages: Message[];
}
