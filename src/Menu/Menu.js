import './Menu.css'
import { Link } from "react-router-dom"
export function Menu() {
    return(
    <>
            <nav class="navbar navbar-expand-lg navbar-dark menu fixed-top">
                <div class="container-fluid">
                <Link class="navbar-brand" to="/"><img src='https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/Dise%C3%B1o%20sin%20t%C3%ADtulo%20(2).png?alt=media&token=22bfc904-fa9e-4926-aa5b-cbabc5300acf' class="pn"/></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/administrar">Agregar Productos</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/productos">Productos</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/nosotros">Acerca de</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/creadores">¿Quienes Somos?</Link>
                    </li>
                </ul>
                </div>
                </div>
            </nav>  
    </>
    )
}