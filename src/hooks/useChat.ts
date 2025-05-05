import { talkToAI } from '../services/openai.ts';
import { Message, MessageType } from '../types/types.ts';

export async function sendMessage(message: Message) {
   if(message.type === 'text') {
      if(message.content === '') {
         return;
      }

      return await talkToAI(message);
   }
}

export function createMessageObj(font: string, target: string, messageType: MessageType, message: string) {
   return {
      id: window.crypto.randomUUID(),
      from: font,
      to: target,
      type: messageType,
      content: message,
      timestamp: Date.now()
   }
}