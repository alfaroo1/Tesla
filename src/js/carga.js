//Variables
let cards = document.getElementById('cards');
//Funciones
//Cambiar estilo de cotnenedor seleccionado
const changeCont = (event) =>{
    let hijos = cards.children;
    //Recorremos los hijos
    for (const hijo of hijos) {
        
        hijo.classList.remove("encendido");
        hijo.classList.add("apagado");
        if (event.target == hijo && event.target.classList == "apagado") {
            hijo.classList.remove("apagado");
            hijo.classList.add("encendido");
        }
    }
}
//Eventos
cards.addEventListener('click',changeCont);