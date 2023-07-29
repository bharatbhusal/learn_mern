import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
const DivContainer = document.getElementById('app')
const root = createRoot(DivContainer)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/*' element={<App />} />
        </Routes>
    </BrowserRouter>
)