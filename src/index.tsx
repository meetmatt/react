import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import Index from './routes/Index.tsx'
import SplitTheBill from './routes/SplitTheBill.tsx'
import TipCalculator from './routes/TipCalculator.tsx'
import './index.css'

createRoot(window.document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path="/tip-calculator" element={<TipCalculator />}/>
        <Route path="/split-the-bill" element={<SplitTheBill/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
