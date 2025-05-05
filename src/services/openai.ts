// TODO: Move this file to server-side

import OpenAI from 'openai';
import { Message } from '../types/types';
import { createMessageObj } from '../hooks/useChat';

// TODO: Put this KEY on .env file
const openaiAPIKey: string = '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';
const client = new OpenAI({
   apiKey: openaiAPIKey,
   dangerouslyAllowBrowser: true
});

export async function talkToAI(message: Message) {
   const response = await client.responses.create({
      model: 'gpt-3o-mini',
      input: message.content
   });

   console.log(response);
   return createMessageObj(message.to, message.from, 'text', response.output_text);
}

