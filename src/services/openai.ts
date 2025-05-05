// TODO: Move this file to server-side

import OpenAI from 'openai';
import { Message } from '../types/types';
import { createMessageObj } from '../hooks/useChat';

// TODO: Put this KEY on .env file
const openaiAPIKey: string = '<YOUR_API_KEY>';
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

