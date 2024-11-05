

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './pages/page1/Page1'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path=''element={<Page1/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
