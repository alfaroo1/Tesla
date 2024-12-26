let formulario = document.getElementById('form');
//Inputs formulario
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
//Errores
let errorCorreo = document.getElementById('errorcorreo');
let errorPass = document.getElementById('errorpass');
//Funciones
//Validar inputs
const validarInputs = (event) => {
    let elemento = event.target;

    if (elemento.tagName == "INPUT" && elemento.validity.valid){
        elemento.nextElementSibling.textContent = "";
        elemento.classList.remove("border-2");
        elemento.classList.remove("border-red-400");
    }
}
//Validacion contraseña
const validatePassword = () =>{
    //Establecemos la validacion
    let validacion = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/
    //Comprobamos si es correcto
    if (!validacion.test(contraseña.value)) {
        contraseña.classList.add("border-2");
        contraseña.classList.add("border-red-400");
        errorPass.textContent = "Formato contraseña incorrecto";
    }
}
//Validacion de todo el formulario
const validateAll = (event) =>{
    event.preventDefault();
    //Correo no puede estar vacio
    if (correo.validity.valueMissing) {
        correo.classList.add("border-2");
        correo.classList.add("border-red-400");
        errorCorreo.textContent = "El correo no puede estar vacio";
    }
    //Validacion contraseña
    if (contraseña.validity.valueMissing) {
        contraseña.classList.add("border-2");
        contraseña.classList.add("border-red-400");
        errorPass.textContent = "La contraseña no puede estar vacia";
    }else{
        validatePassword()
    };
}
//Eventos
formulario.addEventListener('submit',validateAll);
formulario.addEventListener("input", validarInputs);