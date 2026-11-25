import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx';
import "./main.css";

// 	Inicializa o React e configura o roteamento.
import App from './App.tsx'

if(import.meta.env.DEV){
    const {worker} = await import("./mocks/browser.ts")
    await worker.start();
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AuthProvider>
    </StrictMode>,
);