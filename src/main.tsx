import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css'
import App from './App.tsx';
import Signup from './components/Signup.tsx';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <BrowserRouter>
         <div className="font-(family-name:--font-helvetica)">
            <Routes>
               <Route path="/" element={ <App /> } />
               <Route path="/signup" element={ <Signup /> } />
            </Routes>
         </div>
      </BrowserRouter>
   </StrictMode>
);
