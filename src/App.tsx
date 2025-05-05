import { useState } from 'react';

import Login from './hooks/Login.tsx';
import MessageInput from './components/MessageInput.tsx';
import { User, Message } from './types/types.ts';
import ChatMessage from './components/ChatMessage.tsx';
import { aiUser } from './components/Data.tsx';

function App() {
   const [user, setUser] = useState<User | null>(null);
   const [messages, setMessages] = useState<Message[]>([]);

   const appendMessage = (newMessages: Message[]) => {
      setMessages(messages.concat(newMessages));
   }

   return ( 
      user ? (
         <>
            <div className="grid justify-center content-center w-screen h-screen">
               <div className="grid bg-(--color-grey) rounded-xl w-[70vw] h-[90vh] content-end">
                  <div className="flex flex-col overflow-scroll self-end mb-3">
                     {
                        messages.map((message, index) => {
                           if(user.id === message.from) {
                              return (
                                 <div key={index} className="flex w-full justify-end">
                                    <ChatMessage message={message} user={user} />
                                 </div>
                              )
                           }

                           return (
                              <div key={index} className="flex w-full justify-start">
                                 <ChatMessage message={message} user={user} />
                              </div>
                           )
                        })
                     }
                  </div>
                  <MessageInput font={user} target={aiUser} messagesHistory={appendMessage} />
               </div>
            </div>
         </>
      ) : (
         <>
            <div className="size-screen">
               <Login onLogin={setUser} />
            </div>
         </>
      )
   );
}

export default App;