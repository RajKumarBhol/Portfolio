import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
            <Toaster position="bottom-right" toastOptions={{
                style: {
                    background: '#1F2937',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)'
                }
            }} />
        </BrowserRouter>
    </React.StrictMode>,
)
