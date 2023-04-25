import { Route, Routes} from "react-router-dom"
import { Pepe } from "../Home/Home"
import { Administrador } from "../Administrador/Administrador"
import { Menu } from "../Menu/Menu"
import { Tienda } from "../Tienda/Tienda"
import { AmpliarInfo } from "../AmpliarInfo/AmpliarInfo"
import { AcercaDe} from "../AcercaDe/AcercaDe"
import { Creadores } from "../Creadores/Creadores"
import App from "../Footer/Footer"



export function Router(){

    return (
        <>
        <header>
          <Menu></Menu>
        </header>
       
        <Routes>
          <Route path="/" element={<Pepe />} />
          <Route path="/administrar" element={<Administrador />} />
          <Route path="/productos" element={<Tienda />}/>
          <Route path="/compras" element={<AmpliarInfo />}/>
          <Route path="/nosotros" element={<AcercaDe/>}/>
          <Route path="/creadores" element={<Creadores/>}/>
        </Routes>
        <footer>
          <App></App>
        </footer>
        </>
      )

}