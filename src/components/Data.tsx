import { useState } from 'react';
import { User } from '../types/types.ts';

const usersList: User[] = [
   {
      id: '98744cf0-1727-4065-b1bb-7394cc50d4a6',
      name: 'carlos',
      password: 'furioso'
   }
]

export const aiUser: User = {
   'id': '7e50b0c7-65eb-46df-bafe-35ff48cf4a36',
   'name': 'OpenAI',
   'password': ''
}

function Data() {
   const [users, setUsers] = useState<User[]>(usersList);

   const getUsers = () => {
      return users;
   }
   
   const addUser = (newUser: User) => {
      usersList.push(newUser);
      setUsers(usersList);
   }

   return { getUsers, addUser };
}

export default Data;