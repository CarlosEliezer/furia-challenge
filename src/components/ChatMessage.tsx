import { Message, User } from '../types/types.ts';

type Props = {
   message: Message,
   user: User
}

function ChatMessage({ message, user }: Props ) {
   return (
      <>
         <div
            className={`
               ${(message.from === user.id) ? (
                  'bg-(--color-green) mr-5'
               ) : (
                  'bg-(--color-light-grey) ml-5'
               )}
               text-(--color-white) max-w-[40%] mx-2 mb-0.5 px-4 py-2 rounded-xl
            `}
         >
            <span className="text-justify whitespace-pre-wrap break-all">{ message.content }</span>
         </div>
      </>
   )
}

export default ChatMessage;