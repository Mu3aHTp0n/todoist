import { BrowserRouter, Routes, Route } from "react-router-dom"

import BoardsPage from "@pages/BoardsPage/BoardsPage"
import BoardPage from "@pages/BoardPage/BoardPage"
import Header from "@widgets/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/boards" element={<BoardsPage /> } />
        <Route path="/boards/:name" element={<BoardPage /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
