import { useState } from 'react';

import micIcon from '../assets/img/mic.svg';
import sendIcon from '../assets/img/send.svg';
import { createMessageObj, sendMessage } from '../hooks/useChat.ts';
import { ClickEvent, Message, MessageType, User } from '../types/types.ts';

type Props = {
   font: User,
   target: User;
   messagesHistory: Function;
}

function MessageInput({ font, target, messagesHistory }: Props) {
   const [icon, setIcon] = useState(micIcon);
   const [message, setMessage] = useState<string>('');
   const [messageType, setMessageType] = useState<MessageType>('audio');

   const handleMessage = (newMessage: string) => {
      setMessage(newMessage);

      if(newMessage === '') {
         setIcon(micIcon);
         return;
      }

      setIcon(sendIcon);
   }

   const handleSend = async (e: ClickEvent) => {
      e.preventDefault();

      if(icon === micIcon) {
         setMessageType('audio');
         return;
      }

      setMessageType('text');

      const userMessage: Message = createMessageObj(font.id, target.id, messageType, message);
      const response: Message | undefined = await sendMessage(userMessage);

      if(!response) {
         const errorMessage: Message = createMessageObj(target.id, font.id, 'text', 'Alguma coisa deu errada. Por favor, tente novamente');
         messagesHistory([userMessage, errorMessage]);

         // Clear the message input after send
         setMessage('');
         setIcon(micIcon);
         return;
      }

      messagesHistory([userMessage, response]);
      
      // Clear the message input after send
      setMessage('');
      setIcon(micIcon);
   }

   return(
      <>
         <div className="flex rounded-xs self-end mx-5 mb-7">
            <input 
               id="message-input"
               placeholder="Digite sua mensagem..."
               type="text"
               value={message}
               className="px-5 py-2 bg-(--color-white) rounded-l-lg self-center w-full h-full text-black text-wrap"
               onChange={(msg) => {handleMessage(msg.target.value)}}
            ></input>
            <button
               type="submit"
               className="px-5 bg-(--color-white) rounded-r-lg"
               onClick={(e: ClickEvent) => {
                  handleSend(e);
               }}
            >
               <img src={icon} alt="Send" />
            </button>
         </div>
      </>
   )
}

export default MessageInput;