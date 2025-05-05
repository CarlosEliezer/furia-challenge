import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ClickEvent, User } from '../types/types.ts';
import Data from './Data.tsx';

function Signup() {
   const [username, setUsername] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [confirmPassword, setConfirmPassword] = useState<string>('');
   const {getUsers, addUser} = Data();
   const navigate = useNavigate();

   const handleSignup = (e: ClickEvent) => {
      e.preventDefault();

      // TODO: Cryptography on the passwords and save the users
      if(username !== '' && password !== '') {
         if(password === confirmPassword) {
            const newUser: User = {
               id: window.crypto.randomUUID(),
               name: username,
               password: password
            }
   
            addUser(newUser);
            console.log(getUsers());
            
            // Return to root url
            navigate('/');
         }
      }
   }

   const handleChanges = (target: Function, content: string) => {
      target(content);
   }

   return(
      <>
         <div className="grid w-screen h-screen justify-center content-center">
            <div className="grid justify-items-center rounded-xl max-w-md bg-(--color-grey) text-(--color-white)">
               <img
                  className="mt-8 rounded-full"
                  src="https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1746334080341"
                  alt="Logo FURIA"
               />
               <h1 className="m-4 text-center font-bold">Junte-se a nós!</h1>
               <form className="grid justify-items-center">
                  <div className="flex flex-col">
                     <label htmlFor="user">Usuário</label>
                     <input
                        id="user"
                        type="text"
                        placeholder="Fofuria"
                        className="w-full/2 mb-3 px-2 py-3 bg-white text-black rounded-xl"
                        onChange={(e) => handleChanges(setUsername, e.target.value)}
                     ></input>
                  </div>

                  <div className="flex flex-col">
                     <label htmlFor="password">Senha</label>
                     <input
                        id="password"
                        type="password"
                        placeholder="Digite uma senha"
                        className="w-full/2 mb-3 px-2 py-3 bg-white text-black rounded-xl"
                        onChange={(e) => handleChanges(setPassword, e.target.value)}
                     ></input>
                  </div>

                  <div className="flex flex-col">
                     <label htmlFor="confirm-password">Confirmação de senha</label>
                     <input
                        id="confirm-password"
                        type="password"
                        placeholder="Confirme sua senha"
                        className="w-full/2 mb-3 px-2 py-3 bg-white text-black rounded-xl"
                        onChange={(e) => handleChanges(setConfirmPassword, e.target.value)}
                     ></input>
                  </div>
               
                  <button
                     className="p-5 mt-5 mb-8 w-50 bg-black rounded-lg font-bold text-white"
                     type="submit"
                     onClick={(e: ClickEvent) => {
                        handleSignup(e)
                     }}
                  >
                     Inscrever-se
                  </button>
               </form>
            </div>
         </div>
      </>
   )
}

export default Signup;