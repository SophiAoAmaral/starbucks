import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Home from "./components/Home"
import NossoCafe from "./components/NossoCafe"
import ImpactoSocial from "./components/ImpactoSocial"
import { Routes,Route } from "react-router"

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/NossoCafe" element={<NossoCafe />} />
        <Route path="/impacto" element={<ImpactoSocial />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
