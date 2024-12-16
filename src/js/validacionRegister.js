let formulario = document.getElementById('form');
//Inputs formulario
let nombre = document.getElementById('nombre');
let ape1 = document.getElementById('ape1');
let ape2 = document.getElementById('ape2');
let correo = document.getElementById('correo');
let tarjeta = document.getElementById('tarjet');
let contraseña = document.getElementById('contraseña');
//Errores
let errorName = document.getElementById('errornombre');
let errorApe1 = document.getElementById('errorape1');
let errorApe2 = document.getElementById('errorape2');
let errorTarjeta = document.getElementById('errortarjeta');
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
//Validacion tarjeta de credito
const validateTarjet = () =>{
    //Establecemos la validacion
    let validacion = /^[0-9]{4}[0-9]{4}[0-9]{4}[0-9]{4}$/
    console.log(tarjeta.value.trim());
    //Comprobamos si es correcta o no
    if (!validacion.test(tarjeta.value.trim())) {
        tarjeta.classList.add("border-2");
        tarjeta.classList.add("border-red-400");
        errorTarjeta.textContent= "Formato tarjeta incorrecta";
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
    //Nombre no puede estar vacio
    if (nombre.validity.valueMissing) {
        nombre.classList.add("border-2");
        nombre.classList.add("border-red-400");
        errorName.textContent="El nombre no puede estar vacio";
    }
    //Ape1 no puede estar vacio
    if (ape1.validity.valueMissing) {
        ape1.classList.add("border-2");
        ape1.classList.add("border-red-400");
        errorApe1.textContent = "El ape1 no puede estar vacio";
    }
    //Ape2 no puede estar vacio
    if (ape2.validity.valueMissing) {
        ape2.classList.add("border-2");
        ape2.classList.add("border-red-400");
        errorApe2.textContent = "El ape2 no puede estar vacio";
    }
    //Tarjeta de credito
    if (tarjeta.validity.valueMissing) {
        tarjeta.classList.add("border-2");
        tarjeta.classList.add("border-red-400");
        errorTarjeta.textContent = "La tarjeta no puede estar vacia";
    }else{
        validateTarjet();
    }
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