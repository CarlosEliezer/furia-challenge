export type MessageType = 'text' | 'audio';

export type Message = {
   id: string,
   from: string,
   to: string,
   type: MessageType,
   content: string,
   timestamp: number
}

export type User = {
   id: string,
   name: string,
   password: string,
}

export type ClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>