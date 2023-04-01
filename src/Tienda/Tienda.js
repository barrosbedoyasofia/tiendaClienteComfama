import './Tienda.css'

export function Tienda() {

    function cambiarFoto(evento) {
        evento.preventDefault()
        evento.target.classList.remove("sombra")
    }
    function cambiarFoto2(evento) {
        evento.preventDefault()
        evento.target.classList.add("sombra")
    }
    
    let productos = [
        {nombre: "Buso oversized",
        precio:"70000",
        descripcion:"Hecho de 80% algodon",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/ref1.png?alt=media&token=a2ac6ea7-dbef-4e03-9cd0-68a5af12da73"
        },

        {nombre: "Aretes 1",
        precio:"70000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/aretes1.jpeg?alt=media&token=9ada7b5a-0c87-45c0-8db0-74729c809b80"},

        {nombre: "Aretes 2",
        precio:"60000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/aretes2.jpeg?alt=media&token=85773836-2301-4a51-b57d-58d76ed5da23"},

        {nombre: "Aretes 3",
        precio:"30000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/aretes3.jpeg?alt=media&token=e24b46a7-fce2-49c2-af2b-2035605b594b"},

        {nombre: "Aretes 4",
        precio:"80000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/aretes4.jpeg?alt=media&token=d0cb5a33-25d9-4d39-ab4e-922c9c236592"},

        {nombre: "collar 1",
        precio:"70000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar1.jpeg?alt=media&token=ac3b8367-641e-446d-9de3-ba1e9891225e"},

        {nombre: "collar 2",
        precio:"",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar2.jpeg?alt=media&token=beeffb25-d580-4435-8ad2-416175e651c3"},

        {nombre: "collar 3",
        precio:"25000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar3.jpeg?alt=media&token=7ab77655-b738-4a94-8b9f-42e6bf47aba1"},

        {nombre: "collar 4",
        precio:"20000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar4.jpeg?alt=media&token=5bfc3d79-6d7e-4ff0-806d-ed3fd7ac61b9"},
        
        {nombre: "collar 5",
        precio:"70000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar5.jpeg?alt=media&token=f42966e6-cc6c-4b6d-b401-6cee32435c21"},

        {nombre: "collar 6",
        precio:"80000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar6.jpeg?alt=media&token=53afd9b9-c9ee-4fa1-ab9b-ff5fdcce0c0a"},

        {nombre: "collar 7",
        precio:"25000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar7.jpeg?alt=media&token=721e0563-58b1-4ce6-9cc9-0b195a349b04"},

        {nombre: "collar 8",
        precio:"20000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/collar8.jpeg?alt=media&token=f1fe9380-0e61-48f6-abed-f979817867f9"},

        {nombre: "conjunto 1",
        precio:"25000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/conjunto1.jpeg?alt=media&token=f1770032-d315-4ae6-84f3-0a6b4de07f38"},

        {nombre: "conjunto 2",
        precio:"25000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/conjunto2.jpeg?alt=media&token=1d6649b2-5c4a-44a5-b925-dfbb83e602a5"},

        {nombre: "conjunto 3",
        precio:"25000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/conjunto3.jpeg?alt=media&token=e7e68de1-1892-4f4a-ad78-ae2670ea4171"},

        {nombre: "manilla 1 ",
        precio:"25000",
        descripcion:"Hecho en colombia",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/manilla1.jpeg?alt=media&token=ed39750f-bbc5-40f7-b6a0-9acc2262ac0e"},


    ]

    return(
        <>
            <div class="row row-clos-1 row-cols-md-4 g-3 my-5 p-5">
                {
                    productos.map(function (producto){
                        return(
                        <div class="col zoom">
                            <div class="card shadow h-100 p-2">
                                <h2 class="fw-bold text-center">{producto.nombre}</h2>
                                <img src ={producto.foto} alt="foto" class="img-fluid sombra" 
                                onMouseOver={cambiarFoto} 
                                onMouseLeave={cambiarFoto2}/>
                                <p class="text-center fw-bold">{producto.descripcion}</p>
                                <h3 class="text-success">${producto.precio} COP</h3>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </>
    )

}




