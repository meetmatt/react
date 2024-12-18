import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Index from './routes/Index.tsx'
import App from './components/App.tsx'
import SplitTheBill from './routes/SplitTheBill.tsx'
import './index.css'
import './main.css'

createRoot(window.document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path="/tip-calculator" element={<App/>}/>
        <Route path="/split-the-bill" element={<SplitTheBill/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
