import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ClickEvent, User } from '../types/types.ts';
import Data from '../components/Data.tsx';

type Props = {
   onLogin: (user: User) => void;
};

function Login({ onLogin }: Props) {
   const [username, setUsername] = useState<string>('');
   const [password, setPassword] = useState<string>('');
   const [showError, setShowError] = useState<boolean>(false);
   const {getUsers} = Data();

   const handleLogin = (e: ClickEvent) => {
      e.preventDefault();
      let logged = false;

      // TODO: Change this to have cryptography
      getUsers().map((user) => {
         if(username === user.name && password === user.password) {
            // Return the user that have logged
            logged = true;
            onLogin(user);
            return;
         }
      });

      if(logged) {
         return;
      }

      setUsername('');
      setPassword('');
      setShowError(true);
   }

   const handleChanges = (target: Function, content: string) => {
      target(content);

      // Makes the error message desapair after the user starts putting a new login info
      if(username !== '' || password !== '') {
         setShowError(false);
      }
   }

   return(
      <>
         <div className="grid w-screen h-screen justify-center content-center">
            <div className="grid justify-items-center rounded-xl max-w-md bg-(--color-grey) text-white">
               <img
                  className="mt-8 rounded-full"
                  src="https://gg.soclminer.com.br/customers/79f6dd9a-33ad-4af8-a265-9d446e17b89c/e88a572fa1ef4ec0be7a81d3695ec840/logo.png?v=1746334080341"
                  alt="Logo FURIA"
               />
               <h1 className="m-8 mt-4 text-center font-bold">Bem vindo, furioso(a)!</h1>
               <form className="grid justify-items-center">
                  <p className={`text-red-400 ${showError ? '' : 'hidden'}`}>Dados inválidos, tente novamente.</p>
                  <div className="flex flex-col justify-center">
                     <label htmlFor="user">Usuário</label>
                     <input
                        id="user"
                        type="text"
                        placeholder="Fofuria"
                        value={username}
                        className="w-50 mb-3 px-2 py-3 bg-(--color-white) text-black rounded-xl"
                        onChange={(e) => handleChanges(setUsername, e.target.value)}
                     ></input>
                  </div>

                  <div className="flex flex-col justify-center">
                     <label htmlFor="password">Senha</label>
                     <input
                        id="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        className="w-50 mb-3 px-2 py-3 bg-(--color-white) text-black rounded-xl"
                        onChange={(e) => handleChanges(setPassword, e.target.value)}
                     ></input>
                  </div>
               
                  <button 
                     className="p-5 mt-5 mb-8 w-50 bg-black rounded-lg font-bold text-(--color-white)"
                     type="submit"
                     onClick={(e: ClickEvent) => {
                        handleLogin(e)
                     }}
                  >
                     Entrar
                  </button>
               </form>
               <Link className="text-blue-400 decoration-solid mb-8" to="/signup">Não tenho uma conta</Link>
            </div>
         </div>
      </>
   )
}

export default Login;