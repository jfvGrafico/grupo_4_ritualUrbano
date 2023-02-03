window.addEventListener("load", function(){

    let formularioLogin = document.getElementById("form-login");

        formularioLogin.addEventListener("submit", function(e){
            e.preventDefault();
            
        let inputEmail = document.getElementById("email");
        let email = document.getElementById("email").value
        let errorEmail = document.getElementById("errorEmail");
        let charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(email)
            if(email == ""){
                errorEmail.classList.add("mostrar")
                inputEmail.classList.add("is-invalid")
                errorEmail.classList.remove("ocultar")
                errorEmail.innerHTML = "El campo email debe estar completo";
                console.log(errorEmail)
                return 
            } else if(!charEmail){
                errorEmail.classList.add("mostrar")
                inputEmail.classList.add("is-invalid")
                errorEmail.classList.remove("ocultar")
                errorEmail.innerHTML = "Debe ingresar un email valido"
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
                console.log(errorPassword)
                return
            } else if(inputPassword.value.length < 8){
                errorPassword.classList.add("mostrar")
                inputPassword.classList.add("is-invalid")
                errorPassword.classList.remove("ocultar")
                errorPassword.innerHTML = "La contraseña debe tener al menos 8 caracteres";
                return
            } else if(!charPass){
                console.log(charPass)
                errorPassword.classList.add("mostrar")
                inputPassword.classList.add("is-invalid")
                errorPassword.classList.remove("ocultar")
                errorPassword.innerHTML = "La contraseña debe tener letras mayúsculas, minúsculas, un número y un carácter especial";
                return
            } else {
                errorPassword.classList.remove("mostrar")
                inputPassword.classList.remove("is-invalid")
                errorPassword.classList.add("ocultar")
            }

            
            this.submit()
            
        })
})


