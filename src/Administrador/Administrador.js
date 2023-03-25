export function Administrador(){
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
                        <form>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-basket"></i></span>
                                        <input type="text" class="form-control" placeholder="Nombre" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-camera-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="foto" />
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-card-text"></i></span>
                                            <input type="text" class="form-control" placeholder="clasificacion" />
                                    </div>
                                       
                                </div>
                            </div>
                            
                           
                            <div class="row">
                            <div class="col-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-123"></i></span>
                                        <input type="number" class="form-control" placeholder="cantidad" />
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-currency-dollar"></i></span>
                                        <input type="number" class="form-control" placeholder="precio" />
                                        </div>
                                    </div>
                                <div class="col-3">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-box"></i></span>
                                            <input type="number" class="form-control" placeholder="peso" />
                                    </div>
                                       
                                </div>
                                <div class="col-3">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-boxes"></i></span>
                                            <input type="number" class="form-control" placeholder="volumen" />
                                    </div>  
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <h6>Descripcion</h6>
                                 <div class="input-group">
                                    <span class="input-group-text"><i class="bi bi-pencil-square"></i></span>
                                    <textarea class="form-control" aria-label="With textarea"></textarea>
                                    
                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-tags-fill"></i></span>
                                        <input type="text" class="form-control" placeholder="marca" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-images"></i></span>
                                        <input type="text" class="form-control" placeholder="presentacion" />
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-bus-front-fill"></i></span>
                                            <input type="text" class="form-control" placeholder="proveedor" />
                                    </div>
                                       
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-box-arrow-in-right"></i></span>
                                        <input type="text" class="form-control" placeholder="fecha ingreso" />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-box-arrow-left"></i></span>
                                        <input type="text" class="form-control" placeholder="fecha vencimiento" />
                                        </div>
                                    </div>
                                <div class="col-4">
                                    <div class="input-group mb-3">
                                            <span class="input-group-text" id="basic-addon1"><i class="bi bi-graph-down-arrow"></i></span>
                                            <input type="text" class="form-control" placeholder="descuento" />
                                    </div>
                                       
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}