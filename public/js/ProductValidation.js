window.addEventListener("load", function(){

    let formularioCrear = document.getElementById("form-crearProducto");
    
        formularioCrear.addEventListener("submit", function(e){
            e.preventDefault();
            
                    
            let inputNombreProducto = document.getElementById("nombreProducto");   
            let errorNombreProducto = document.getElementById("errorNombreProducto") 
            
                if(inputNombreProducto.value == ""){
                    errorNombreProducto.classList.add("mostrar")
                    inputNombreProducto.classList.add("is-invalid")
                    errorNombreProducto.classList.remove("ocultar")
                    errorNombreProducto.innerHTML = "El campo de nombre debe estar completo";   
                    inputNombreProducto.focus()
                    return        
                } else if (inputNombreProducto.value.length <2){
                    errorNombreProducto.classList.add("mostrar")
                    inputNombreProducto.classList.add("is-invalid")
                    errorNombreProducto.classList.remove("ocultar")
                    errorNombreProducto.innerHTML = "El campo de nombre de contener al menos 5 caracteres";
                    inputNombreProducto.focus()
                    return
                }else{
                    errorNombreProducto.classList.remove("mostrar")
                    inputNombreProducto.classList.remove("is-invalid")
                    errorNombreProducto.classList.add("ocultar")
                }               
         
            
            let inputDescripcion = document.getElementById("descripcionProducto");
            let errorDescripcion = document.getElementById("errorDescripcion") 
    
                if(inputDescripcion.value == ""){
                    errorDescripcion.classList.add("mostrar")
                    inputDescripcion.classList.add("is-invalid")
                    errorDescripcion.classList.remove("ocultar")
                    errorDescripcion.innerHTML = "El campo descripcion debe estar completo"
                    inputDescripcion.focus()
                    return  
                } else if(inputDescripcion.value.length < 20){
                    errorDescripcion.classList.add("mostrar")
                    inputDescripcion.classList.add("is-invalid")
                    errorDescripcion.classList.remove("ocultar")
                    errorDescripcion.innerHTML = "El campo descripcion debe contener al menos 20 caracteres";
                    inputDescripcion.focus()
                    return 
                } else{
                    errorDescripcion.classList.remove("mostrar")
                    inputDescripcion.classList.remove("is-invalid")
                    errorDescripcion.classList.add("ocultar")
                }
                
            let inputCategorias = document.getElementById("categorias");
            let errorCategorias = document.getElementById("categorias") 
        
                if(inputCategorias.value == ""){
                    errorCategorias.classList.add("mostrar")
                    inputCategorias.classList.add("is-invalid")
                    errorCategorias.classList.remove("ocultar")
                    errorCategorias.innerHTML = "Por favro seleccione una categoria"
                    inputCategorias.focus()
                    return                 
                } else{
                    errorCategorias.classList.remove("mostrar")
                    inputCategorias.classList.remove("is-invalid")
                    errorCategorias.classList.add("ocultar")
                }
            
            let inputPesoProducto = document.getElementById("pesoProducto");
            let errorPesoProducto = document.getElementById("errorPesoProducto") 
        
                if(inputPesoProducto.value == ""){
                    errorPesoProducto.classList.add("mostrar")
                    inputPesoProducto.classList.add("is-invalid")
                    errorPesoProducto.classList.remove("ocultar")
                    errorPesoProducto.innerHTML = "El campo de peso debe estar completo"
                    inputPesoProducto.focus()
                    return                 
                } else{
                    errorPesoProducto.classList.remove("mostrar")
                    inputPesoProducto.classList.remove("is-invalid")
                    errorPesoProducto.classList.add("ocultar")
                }
            let inputPrecioProducto = document.getElementById("precioProducto");
            let errorPrecioProducto = document.getElementById("errorPrecioProducto") 
            
                if(inputPrecioProducto.value == ""){
                    errorPrecioProducto.classList.add("mostrar")
                    inputPrecioProducto.classList.add("is-invalid")
                    errorPrecioProducto.classList.remove("ocultar")
                    errorPrecioProducto.innerHTML = "El campo de precio debe estar completo"
                    inputPrecioProducto.focus()
                    return                 
                } else{
                    errorPrecioProducto.classList.remove("mostrar")
                    inputPrecioProducto.classList.remove("is-invalid")
                    errorPrecioProducto.classList.add("ocultar")
                }
                
            let inputImagenProducto = document.getElementById("imagenProducto");
            let imagen = document.getElementById("imagenProducto").value;
            let errorImagenProducto = document.getElementById("errorImagenProducto");
            let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
                if(!allowedExtensions.exec(imagen)){
                    errorImagenProducto.classList.add("mostrar");
                    inputImagenProducto.classList.add("is-invalid");
                    errorImagenProducto.classList.remove("ocultar");
                    errorImagenProducto.innerHTML = "Por favor debes cargar un archivo que tenga extensiones .jpeg .jpg .png .gif";
                    inputImagenProducto.focus();
                    return;
                } else {
                    errorImagenProducto.classList.remove("mostrar");
                    errorImagenProducto.classList.add("ocultar");
                }
          
               
                this.submit();          
              
            
        });
    })



console.log("Probando vinculación en crear");