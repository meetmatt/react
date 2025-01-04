import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import SplitTheBill from "./routes/SplitTheBill.tsx"
import Index from "./routes/Index.tsx";
import './index.css'

createRoot(window.document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Index/>}/>
        <Route path="/split-the-bill" element={<SplitTheBill/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
