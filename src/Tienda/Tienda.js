export function Tienda() {
    
    let productos = [
        {nombre: "Buso oversized",
        precio:"70000",
        descripción:"Hecho de 80% algodon",
        foto:"https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/ref1.png?alt=media&token=a2ac6ea7-dbef-4e03-9cd0-68a5af12da73"
        },

        {nombre: "Chaleco a cuadros",
        precio:"70000",
        descripción:"",
        foto:""},

        {nombre: "Cardigan",
        precio:"60000",
        descripción:"",
        foto:""},

        {nombre: "Camiseta",
        precio:"30000",
        descripción:"",
        foto:""},

        {nombre: "Jean highWeist",
        precio:"80000",
        descripción:"",
        foto:""},

        {nombre: "jean negro",
        precio:"70000",
        descripción:"",
        foto:""},

        {nombre: "Chaqueta overzied",
        precio:"",
        descripción:"",
        foto:""},

        {nombre: "Gorra",
        precio:"25000",
        descripción:"",
        foto:""},

        {nombre: "sombrero rosa",
        precio:"20000",
        descripción:"",
        foto:""},

    ]

    return(
        <>
            <div class="row row-clos-1 row-cols-md-4 g-3 my-5 p-5">
                {
                    productos.map(function (producto){
                        <div class="col">
                            <div class="card shadow h-100 p-2">
                                <h2 class="fw-bold text-center">{producto.nombre}</h2>
                                <img src ={producto.foto} alt="foto" class="img-fluid"/>
                                <p class="text-center fw-bold">{producto.descripción}</p>
                                <h3 class="text-success">${producto.precio} COP</h3>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )

}




