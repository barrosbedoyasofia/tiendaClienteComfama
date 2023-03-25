import { Route, Routes, Link } from "react-router-dom"
import { Pepe } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu"


export function Router(){

    return (
        <>
        <header>
          <Menu></Menu>
        </header>
      
        <Routes>
          <Route path="/" element={<Pepe />} />
          <Route path="/administrar" element={<Administrador />} />
        </Routes>
        
        </>
       
      )

}