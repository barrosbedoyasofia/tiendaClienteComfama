import { useState, useEffect } from "react"
import { registrarProductoEnBd } from "../services/agregarProducto"
export function Administrador(){
    const[nombre, setNombre]=useState("")
    const[foto, setFoto]=useState("")
    const[clasificacion, setClasificacion]=useState("")
    const[cantidad, setCantidad]=useState("")
    const[precio, setPrecio]=useState("")
    const[peso, setPeso]=useState("")
    const[volumen, setVolumen]=useState("")
    const[descripcion, setDescripcion]=useState("")
    const[marca, setMarca]=useState("")
    const[presentacion, setPresentacion]=useState("")
    const[proveedor, setProveedor]=useState("")
    const[fechaingreso, setFechaiIngreso]=useState("")
    const[fechavencimiento, setFechaVencimiento]=useState("")
    const[descuento,setDescuento]=useState("")
    
function procesarFormulario(evento) {
    evento.preventDefault()
    let datosProducto={
        "nombre":nombre,
        "cantidad":cantidad,
        
        /*"clasificacion":clasificacion,
        "foto":foto,
        "precio":precio,
        "peso":peso,
        "volumen":volumen,
        "descripcion":descripcion,
        "marca":marca,
        "presentacion":presentacion,
        "proveedor":proveedor,
        "fechaingreso":fechaingreso,
        "fechavencimiento":fechavencimiento,
        "descuento":descuento*/
    }
    console.log(datosProducto)
    registrarProductoEnBd(datosProducto)
    .then(function(respuesta){
        console.log(respuesta)
    })
}

    return(
        <>
            <br></br>
            <br></br>
            <div class="container-fluid my-5">
                <div class="row">
                    <div class="col-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/cl1.jpg?alt=media&token=92c739d5-ab2e-45b1-b17b-e82fee080ec7" 
                        alt="foto" class="image-fluid"></img>
                    </div>
                    <div class="col-8">
                       <h2>Registro de mercancia</h2>
                        <form class="my-5" onSubmit={procesarFormulario}>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-basket"></i></span>
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="Nombre" 
                                        id="nombre" 
                                        onChange={(evento)=>{
                                            setNombre(evento.target.value);
                                        }}/>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-camera-fill"></i></span>
                                        <input type="text"
                                         class="form-control" 
                                         placeholder="foto" 
                                         id="foto"
                                         onChange={(evento)=>{
                                            setFoto(evento.target.value);
                                        }} />
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-card-text"></i></span>
                                            <input type="text" 
                                            class="form-control" 
                                            placeholder="clasificacion" 
                                            id="clasificacion"
                                            onChange={(evento)=>{
                                                setClasificacion(evento.target.value);
                                            }} />
                                    </div>
                                       
                                </div>
                            </div>
                            
                           
                            <div class="row">
                            <div class="col-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"></i></span>
                                        <input type="number" 
                                        class="form-control" 
                                        placeholder="cantidad" 
                                        id="cantidad"
                                        onChange={(evento)=>{
                                            setCantidad(evento.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-currency-dollar"></i></span>
                                        <input type="number" 
                                        class="form-control" 
                                        placeholder="precio" 
                                        id="precio"
                                        onChange={(evento)=>{
                                            setPrecio(evento.target.value);
                                        }} />
                                        </div>
                                    </div>
                                <div class="col-3">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-box"></i></span>
                                            <input type="number" 
                                            class="form-control" 
                                            placeholder="peso" 
                                            id="peso"
                                            onChange={(evento)=>{
                                                setPeso(evento.target.value);
                                            }}/>
                                    </div>
                                       
                                </div>
                                <div class="col-3">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-boxes"></i></span>
                                            <input type="number" 
                                            class="form-control" 
                                            placeholder="volumen" 
                                            id="volumen" 
                                            onChange={(evento)=>{
                                                setVolumen(evento.target.value);
                                            }}/>
                                    </div>  
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <h6>Descripcion</h6>
                                 <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-pencil-square"></i></span>
                                    <textarea class="form-control" 
                                    aria-label="With textarea" 
                                    id="descripcion"
                                    onChange={(evento)=>{
                                        setDescripcion(evento.target.value);
                                    }}></textarea>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-tags-fill"></i></span>
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="marca" 
                                        id="marca"
                                        onChange={(evento)=>{
                                            setMarca(evento.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-images"></i></span>
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="presentacion" 
                                        id="presentacion"
                                        onChange={(evento)=>{
                                            setPresentacion(evento.target.value);
                                        }}/>
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-bus-front-fill"></i></span>
                                            <input type="text" 
                                            class="form-control" 
                                            placeholder="proveedor" 
                                            id="proveedor" 
                                            onChange={(evento)=>{
                                                setProveedor(evento.target.value);
                                            }}/>
                                    </div>
                                       
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-box-arrow-in-right"></i></span>
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="fecha ingreso" 
                                        id="fechaingreso" 
                                        onChange={(evento)=>{
                                            setFechaiIngreso(evento.target.value);
                                        }}/>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-box-arrow-left"></i></span>
                                        <input type="text" 
                                        class="form-control" 
                                        placeholder="fecha vencimiento" 
                                        id="fechavencimiento"
                                        onChange={(evento)=>{
                                            setFechaVencimiento(evento.target.value);
                                        }}/>
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-graph-down-arrow"></i></span>
                                            <input type="text" 
                                            class="form-control" 
                                            placeholder="descuento" 
                                            id="descuento"
                                            onChange={(evento)=>{
                                                setDescuento(evento.target.value);
                                            }}/>
                                    </div>
                                       
                                </div>
                                
                                <button type="submit" class="btn btn-outline-primary w-100" >Enviar</button> 
                            </div>
                                
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}