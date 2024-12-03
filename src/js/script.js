//Variables
const contImages = document.getElementById('imagesColor');
const coche = document.getElementById('coche');
const color = document.getElementById('color');
//Funciones
const sacarColor = (event) =>{
    if (event.target.tagName == "IMG") {
        //Recorremos las imagenes pa quitarlas los bordes
        for (const hijo of contImages.children) {
            hijo.style.border = "none";
        }
        //Sacamos el color de la imagen
        let colorCoche = event.target.alt;
        //Cambiamos la ruta
        coche.src = "../assets/images/model3/"+colorCoche+".jpeg";
        //Cambiamos el titulo
        color.textContent = colorCoche;
        //Le damos estilo distitno a la imagen que clica
        event.target.style.border = "1px solid white";
        event.target.style.borderRadius = "50%";
    }
}

//Eventos
contImages.addEventListener('click',sacarColor);