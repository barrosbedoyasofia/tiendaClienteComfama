import './AmpliarInfo.css'

export function AmpliarInfo() {

    return(
        <>
        <br />
        <br />
        <div class="container my-5">
            <div class="row"></div>
            <div class="col-12 col-md-7">
                <img src="https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com
                /o/ref1.png?alt=media&token=a2ac6ea7-dbef-4e03-9cd0-68a5af12da73" 
                class="img-fluid w-75" 
                alt="foto"
                />
            </div>
            <div class="col-12 col-md-5 border p-3 rounded shadow">
                <h2 class="fw-bold">Buso oversized</h2>
                <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>
                <i class="bi bi-star-fill text-warning fs-1 ms-1"></i>

                <i class="bi bi-star-fill fs-1 ms-1"></i>
                <i class="bi bi-star-fill fs-1 ms-1"></i>
                <br/>
                <span class="badge text-bg-warning mt-3">Más vendido</span> 
                <br/>
                <br/>
                <h1>$70000</h1>
                <span class="badge text-bg-primary mt-3">Oferton</span> 
                <br/>
                <br/>
                <p class="text-muted mt-3">Hasta 48 cuotas</p>
                <img src="https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/visa.png?alt=media&token=c5d52bf5-04c9-4e59-9c91-5d90daa53f2c" alt="iconoVisa" class="img-fluid me-3"/>
                <img src=" https://firebasestorage.googleapis.com/v0/b/bybright-efa55.appspot.com/o/american-express.png?alt=media&token=63042a3f-ed89-4969-9ae1-5432b3533840" alt="iconoAmeExp" class="img-fluid"/>
                <br/>
                <i class="bi bi-truck display-1 mt-5"></i>
                <p>Entregas en Medellin y valle del aburra</p>
                <br/>
                <br/>
                <form>
                    <label class="form-label">Cantidad:</label>
                    <input class="form-control" type='number' value="1"></input>
                    <button type="submit" class="btn btn-warning mt-2 w-100">
                        <i class="bi bi-cart4">Añadir</i>
                    </button>

                </form>
            </div>
        </div>
        
        </>
        )
    
}