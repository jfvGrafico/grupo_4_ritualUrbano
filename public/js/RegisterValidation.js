window.addEventListener("load", function(){

let formularioRegistro = document.querySelector("form.form-registro");

    formularioRegistro.addEventListener("submit", function(e){
        e.preventDefault();
        
                
        let inputNombre = document.getElementById("nombre");   
        let errorNombre = document.getElementById("errorNombre")  
        
            if(inputNombre.value == ""){
                errorNombre.classList.add("mostrar")
                inputNombre.classList.add("is-invalid")
                errorNombre.classList.remove("ocultar")
                errorNombre.innerHTML = "El campo de nombre debe estar completo";   
                inputNombre.focus()
                return        
            } else if (inputNombre.value.length <2){
                errorNombre.classList.add("mostrar")
                inputNombre.classList.add("is-invalid")
                errorNombre.classList.remove("ocultar")
                errorNombre.innerHTML = "El campo de nombre de contener al menos 2 caracteres";
                inputNombre.focus()
                return
            }else{
                errorNombre.classList.remove("mostrar")
                inputNombre.classList.remove("is-invalid")
                errorNombre.classList.add("ocultar")
            }               
     
        
        let inputApellido = document.getElementById("apellido");
        let errorApellido = document.getElementById("errorApellido") 

            if(inputApellido.value == ""){
                errorApellido.classList.add("mostrar")
                inputApellido.classList.add("is-invalid")
                errorApellido.classList.remove("ocultar")
                errorApellido.innerHTML = "El campo de apellido debe estar completo"
                inputApellido.focus()
                return  
            } else if(inputApellido.value.length < 2){
                errorApellido.classList.add("mostrar")
                inputApellido.classList.add("is-invalid")
                errorApellido.classList.remove("ocultar")
                errorApellido.innerHTML = "El campo de apellido de contener al menos 2 caracteres";
                inputApellido.focus()
                return 
            } else{
                errorApellido.classList.remove("mostrar")
                inputApellido.classList.remove("is-invalid")
                errorApellido.classList.add("ocultar")
            }
            
        let inputEmail = document.getElementById("email");
        let email = document.getElementById("email").value
        let errorEmail = document.getElementById("errorEmail");
        let charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email)
            if(email == ""){
                errorEmail.classList.add("mostrar")
                inputEmail.classList.add("is-invalid")
                errorEmail.classList.remove("ocultar")
                errorEmail.innerHTML = "El campo email debe estar completo";
                inputEmail.focus()
                return 
            } else if(!charEmail){
                errorEmail.classList.add("mostrar")
                inputEmail.classList.add("is-invalid")
                errorEmail.classList.remove("ocultar")
                errorEmail.innerHTML = "Debe ingresar un email valido"
                inputEmail.focus()
                return 
            } else{
                errorEmail.classList.remove("mostrar")
                inputEmail.classList.remove("is-invalid")
                errorEmail.classList.add("ocultar")
            }
        
        let inputPassword = document.getElementById("password");
        let password = document.getElementById('password').value
        let errorPassword = document.getElementById("errorPassword");
        let charPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&].{8}/.test(
            password)
            if(inputPassword.value == ""){
                errorPassword.classList.add("mostrar")
                inputPassword.classList.add("is-invalid")
                errorPassword.classList.remove("ocultar")
                errorPassword.innerHTML = "El campo contraseña debe ser obligatorio";
                inputPassword.focus()
                return
            } else if(inputPassword.value.length < 8){
                errorPassword.classList.add("mostrar")
                inputPassword.classList.add("is-invalid")
                errorPassword.classList.remove("ocultar")
                errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
                inputPassword.focus()
                return
            } else if(!charPass){
                console.log(charPass)
                errorPassword.classList.add("mostrar")
                inputPassword.classList.add("is-invalid")
                errorPassword.classList.remove("ocultar")
                errorPassword.innerHTML = "La contraseña debe tener letras mayúsculas, minúsculas, un número y un carácter especial";
                inputPassword.focus()
                return
            } else {
                errorPassword.classList.remove("mostrar")
                inputPassword.classList.remove("is-invalid")
                errorPassword.classList.add("ocultar")
            }
            
        let inputImagen = document.getElementById("imagen");
        let imagen = document.getElementById("imagen").value;
        let errorImagen = document.getElementById("errorImagen");
        let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            if(!allowedExtensions.exec(imagen)){
                errorImagen.classList.add("mostrar");
                inputImagen.classList.add("is-invalid");
                errorImagen.classList.remove("ocultar");
                errorImagen.innerHTML = "Por favor debes cargar un archivo que tenga extensiones .jpeg .jpg .png .gif";
                inputImagen.focus();
                return;
            } else {
                errorImagen.classList.remove("mostrar");
                errorImagen.classList.add("ocultar");
            }
      
           
            this.submit();
        
          
        
    });
})



