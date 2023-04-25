import './Home.css'
import {Menu} from '../Menu/Menu'

import { Servicios } from '../Servicios/Servicios'

export function Pepe(){
    return(
        <>
            <section>
                <div class="banner">
                    <h1>Bienvenido...</h1>
                </div>
            </section>
            
            <Servicios></Servicios>
        </>
    )
}