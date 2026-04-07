import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NossoCafe from "./components/NossoCafe"
import ImpactoSocial from "./components/ImpactoSocial"
import { Routes,Route } from "react-router"
import Produtos from "./pages/Produtos"
import Torras from "./pages/Torras"

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/NossoCafe" element={<NossoCafe />} />
        <Route path="/impacto" element={<ImpactoSocial />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/torras" element={<Torras/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
