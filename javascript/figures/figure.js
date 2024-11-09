/*Captura de elementos Html*/
const tituloPrincipal=document.querySelector('.tituloSitio');
const formularioSeleccionarFiguras=document.querySelector('.formularioOpcionFiguras');
const selectFiguras=document.querySelector('.selectFiguras');
const formularioTriangulo=document.querySelector('.formularioTriangulo');
const formularioTrapecio=document.querySelector('.formularioTrapecio');
const formularioCirculo=document.querySelector('.formularioCirculo');
const formularioCuadrado=document.querySelector('.formularioCuadrado');
const formularioRombo=document.querySelector('.formularioRombo');
const formularioPentagono=document.querySelector('.formularioPentagono');
const mensajeFinal=document.querySelector('.mensajeFinal');
const contenedorContinuar=document.querySelector('.contenedorContinuar');

/*Manejo del onclick boton selecionar figura*/
const handleOnclickBotonFiguras=(e)=>{
    e.preventDefault();
    formularioSeleccionarFiguras.style.visibility='hidden';
    switch(selectFiguras.value){
        case 'Triangulo':
            formularioTriangulo.style.visibility='visible';
        break;
        case 'Trapecio':
            formularioTrapecio.style.visibility='visible';
        break;
        case 'Circulo':
            formularioCirculo.style.visibility='visible';
        break;
        case 'Cuadrado':
            formularioCuadrado.style.visibility='visible';
        break;
        case 'Rombo':
            formularioRombo.style.visibility='visible';
        break;
        case 'Pentagono':
            formularioPentagono.style.visibility='visible';
        break;
        default:alert("Opcion no valida");
        formularioSeleccionarFiguras.style.visibility='visible';
    }
}

/*Manejo del onclick boton continuar*/
handleOnclickBotonContinuar=()=>{
    formularioSeleccionarFiguras.style.visibility='visible';
    mensajeFinal.style.visibility='hidden';
    contenedorContinuar.style.visibility='hidden';
    selectFiguras.value = 'Figuras';
}

/*Manejo del onclick boton no continuar*/
handleOnclickBotonNoContinuar=()=>{
    formularioSeleccionarFiguras.style.visibility='hidden';
    contenedorContinuar.style.visibility='hidden';
    mensajeFinal.innerHTML=(`<h3>¡Hasta la proxima</h3>
        <h3>Muchas gracias!</h3>`);
}


/*Funcion triangulo*/
handleOnclickTriangulo=(e)=>{
    e.preventDefault();
    const baseTriangulo=document.querySelector('.inputBaseTriangulo');
    const alturaTriangulo=document.querySelector('.inputAlturaTriangulo');
    const lado1Triangulo=document.querySelector('.inputLadoUnoTriangulo');
    const lado2Triangulo=document.querySelector('.inputLadoDosTriangulo');
    const lado3Triangulo=document.querySelector('.inputLadoTresTriangulo');
    if(baseTriangulo.value==='' || alturaTriangulo.value===''|| lado1Triangulo.value==='' || lado2Triangulo.value==='' || lado3Triangulo.value===''){
        alert('No pueden haber campos vacios')
    }
    else{
        formularioTriangulo.style.visibility='hidden';
        const area = (baseTriangulo.value * alturaTriangulo.value) / 2;
        const perimetro = parseFloat(lado1Triangulo.value) + parseFloat(lado2Triangulo.value) + parseFloat(lado3Triangulo.value);
        mensajeFinal.style.visibility='visible';
        mensajeFinal.innerHTML=(`<h3>¡El area del triangulo es: ${area} cm2</h3>
         <h3>y su perimetro es ${perimetro} cm!</h3>`);
        contenedorContinuar.style.visibility='visible';
        baseTriangulo.value='';
        alturaTriangulo.value='';
        lado1Triangulo.value='';
        lado2Triangulo.value='';
        lado3Triangulo.value ='';   
    }
                      
}

/*Funcion trapecio*/
handleOnclickTrapecio=(e)=>{
    e.preventDefault();
    const base1Trapecio=document.querySelector('.inputBase1Trapecio');
    const base2Trapecio=document.querySelector('.inputBase2Trapecio');
    const alturaTrapecio=document.querySelector('.inputAlturaTrapecio');
    const ladoUnoTrapecio=document.querySelector('.inputLadoUnoTrapecio');
    const ladoDosTrapecio=document.querySelector('.inputLadoDosTrapecio');
    if(base1Trapecio.value==='' || base2Trapecio.value==='' || alturaTrapecio.value==='' || ladoUnoTrapecio.value==='' || ladoDosTrapecio.value==='' ){
        alert('No pueden haber campos vacios')
    }
    else{
        formularioTrapecio.style.visibility='hidden';
        const area = ((parseFloat(base1Trapecio.value) + parseFloat(base2Trapecio.value)) * parseFloat(alturaTrapecio.value)) / 2;
        const perimetro = parseFloat(base1Trapecio.value) + parseFloat(base2Trapecio.value) + parseFloat(ladoUnoTrapecio.value) + parseFloat(ladoDosTrapecio.value);
        mensajeFinal.style.visibility='visible';
        mensajeFinal.innerHTML=(`<h3>¡El area del trapecio es: ${area} cm2</h3>
        <h3>y su perimetro es ${perimetro} cm!</h3>`);
        contenedorContinuar.style.visibility='visible';
        base1Trapecio.value='';
        base2Trapecio.value='';
        alturaTrapecio.value='';
        ladoUnoTrapecio.value='';
        ladoDosTrapecio.value='';
    }
   
}

/*Funcion circulo*/

handleOnclickCirculo=(e)=>{
    e.preventDefault();
    const radioCirculo=document.querySelector('.inputRadioCirculo');
    const area= Math.PI * Math.pow(parseFloat(radioCirculo.value),2);
    const perimetro=2* Math.PI*parseFloat(radioCirculo.value);
    if(radioCirculo.value===''){
        alert('No pueden haber campos vacios')
    }
    else{
        formularioCirculo.style.visibility='hidden';
        mensajeFinal.style.visibility='visible';
        mensajeFinal.innerHTML=(`<h3>¡El area del circulo es: ${area.toFixed(2)} cm</h3>
        <h3>y su perimetro es ${perimetro.toFixed(2)} cm!</h3>`);
        contenedorContinuar.style.visibility='visible';
        radioCirculo.value='';
    }
    
}

/*Funcion cuadrado*/

handleOnclickCuadrado=(e)=>{
    e.preventDefault();
    const ladoCuadrado=document.querySelector('.inputLadoCuadrado');
    const area=Math.pow(parseFloat(ladoCuadrado.value),2);
    const perimetro=4* parseFloat(ladoCuadrado.value);
    if(ladoCuadrado.value===''){
        alert('No pueden haber campos vacios')
    }
    else{
        formularioCuadrado.style.visibility='hidden';
        mensajeFinal.style.visibility='visible';
        mensajeFinal.innerHTML=(`<h3>¡El area del cuadrado es: ${area.toFixed(2)} cm2</h3>
        <h3>y su perimetro es ${perimetro.toFixed(2)} cm!</h3>`);
        contenedorContinuar.style.visibility='visible';
        ladoCuadrado.value='';
    }
    
}

/*Funcion rombo*/

handleOnclickRombo=(e)=>{
    e.preventDefault();
    const diagonalMayor=document.querySelector('.inputDiagonalMayor');
    const diagonalMenor=document.querySelector('.inputDiagonalMenor');
    const ladoRombo=document.querySelector('.inputLadoRombo');
    const area=((parseFloat(diagonalMayor.value) * parseFloat(diagonalMenor.value)) / 2);
    const perimetro= 4 * parseFloat(ladoRombo.value);
    if(diagonalMayor.value==='' || diagonalMenor.value==='' || ladoRombo.value===''){
        alert('No pueden haber campos vacios')
    }
    else{
        formularioRombo.style.visibility='hidden';
        mensajeFinal.style.visibility='visible';
        mensajeFinal.innerHTML=(`<h3>¡El area del Rombo es: ${area} cm</h3>
        <h3>y su perimetro es ${perimetro} cm!</h3>`);
        contenedorContinuar.style.visibility='visible';
        diagonalMayor.value='';
        diagonalMenor.value='';
        ladoRombo.value='';
    }
    
}

/*Funcion Pentagono*/

handleOnclickPentagono=(e)=>{
    e.preventDefault();
    const ladoPentagono=document.querySelector('.inputLadoPentagono');
    const apotema=document.querySelector('.inputApotemaPentagono');
    const perimetro= 5 * parseFloat(ladoPentagono.value);
    const area= ((perimetro * parseFloat(apotema.value)) /2);
    if(ladoPentagono.value==='' || apotema.value===''){
        alert('No pueden haber campos vacios')
    }
    else{
        formularioPentagono.style.visibility='hidden';
        mensajeFinal.style.visibility='visible';
        mensajeFinal.innerHTML=(`<h3>¡El area del Pentagono es: ${area} cm2</h3>
        <h3>y su perimetro es ${perimetro} cm!</h3>`);
        contenedorContinuar.style.visibility='visible';
        ladoPentagono.value='';
        apotema.value='';
    }
    
}



