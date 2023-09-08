//inicializamos las variables de pantalla y botones desde el archivo html
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

//abrimos un ciclo para poder saber cuando presionen un boton
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        //si la tecla es c limpiamos la pantalla y asignamos el valor 0
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }
        //si el boton es borrar se evalua si hay algo para borrar o si hay algun error 
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                //asigna a la pantalla el valor 0
                pantalla.textContent = "0";
            } else {
                //si no es asi borra el ultimo digito seleccionado
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        //si el boton es igual intentara evaluar la operacion de lo contrario lanzara un error
        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }
        //si en l apantalla esta el 0 o un error imprimira el valor 
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            //si no concatenara el siguiente numero o operacion
            pantalla.textContent += botonApretado;
        }
    })
})