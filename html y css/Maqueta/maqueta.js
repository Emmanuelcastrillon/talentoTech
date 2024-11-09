/* ---------------------------------- nodos --------------------------------- */

// capturamos todos los elementos que necesitamos

const botonIniciarSeccion= document.querySelector('#iniciarSeccion');
const formularioIniciarSeccion= document.querySelector('.formularioIniciarSeccion');
const botonRegistro= document.querySelector('.botonRegistro');

//Agregamos un evento al boton

botonIniciarSeccion.addEventListener('click', function(){
    //cambiamos la visibilidad del formulario
    if(formularioIniciarSeccion.style.visibility==='visible'){
        formularioIniciarSeccion.style.visibility='hidden'
    }
    else{
        formularioIniciarSeccion.style.visibility='visible'
    }
})

botonRegistro.addEventListener('click', function(event){
    event.preventDefault();
    formularioIniciarSeccion.style.visibility='hidden';
})

