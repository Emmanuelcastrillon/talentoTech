const prompt = require("prompt-sync")({ sigint: true });/* Importo Prompt*/

/*Codigo importado en enviarSaludo html para ejercicio del numero mayor de tres*/

// let a = prompt("Ingresa un numero:"); 
// let b=prompt("Ingresa el segundo numero:"); 
// let c = prompt("Ingresa el tercer numero:"); 

// function numeroMayor(){
//     let a =document.querySelector('.num1').value; 
//     let b=document.querySelector('.num2').value; 
//     let c = document.querySelector('.num3').value; 
//     let mayor=0;
//     let siguiente=0;
//     let menor=0;

//      /* Bloque de codigo con if ternario*/
//      if (a > b && a > c) {
//         mayor = a;
//         siguiente = b > c ? b : c;
//         menor = b < c ? b : c;
//     }
//      else if (b > a && b > c) {
//         mayor = b;
//         siguiente = a > c ? a : c;
//         menor = a < c ? a : c;
//     }
//      else {
//         mayor = c;
//         siguiente = a > b ? a : b;
//         menor = a < b ? a : b;
//     }
    
//     //  return(console.log(' El mayor es:' + mayor + ', el siguiente es:'+ siguiente + ' y el menor es:' + menor))
    
//     return alert(`
//         Hola Emmanuel 
//         El numero mayor es: ${mayor},
//         El siguiente es: ${siguiente} 
//         Y el menor es ${menor}`);
// }
// numeroMayor(a,b,c);
// numeroMayor()

/***************************************Ejercicios de practica********************************************/

/*Algoritmo 2: Sistema de ventas con descuentos escalonados
Este algoritmo determina el precio final de una compra en función del monto total, aplicando diferentes
descuentos según la cantidad gastada.
Descripción del algoritmo:
 Se ingresa el monto total de la compra.
 Si la compra es menor de $50, no hay descuento.
 Si la compra está entre $50 y $100, se aplica un 5% de descuento.
 Si la compra es mayor a $100, se aplica un 10% de descuento.*/

// let compra=prompt('Ingresa el valor de tu compra: ');

// function calcularDescuento(compra){
//     let total=0;
//     let descuento= compra<50 ? 0 : 
//         (compra>50 && compra<=100) ? compra * 0.05 :
//         compra>100 ? compra * 0.1 : 0;
//     total=compra - descuento;
//     return console.log('El valor de la compra es: ' + compra + ' pesos y su descuento es: ' + descuento + ' pesos y el total que debe pagar es: ' + total) 
// }
// calcularDescuento(compra) 

/*Algoritmo 3: Clasificación de edades
Este algoritmo clasifica a las personas según su edad en múltiples categorías. Además, tiene en cuenta la
entrada de datos incorrectos, por ejemplo, cuando la edad es negativa o un valor no numérico.
Descripción del algoritmo:
 Se ingresa la edad.
 Se clasifican las personas en varias categorías: bebé, niño, adolescente, adulto, adulto mayor.
 Si la edad no es válida (negativa o no numérica), se muestra un mensaje de error.*/

// let edad=prompt('Ingresa la edad: ')

// function clasificacionEdad(edad){
//     let clasificacion='';
//     if(isNaN(edad) || edad < 0){
//         console.log("La edad es invalidad");
//     }
//     else{
//         clasificacion= 
//           (edad<3) ? 'bebe' :
//           (edad>=3 && edad<=12) ? 'niño' :
//           (edad>12 && edad<18) ? 'adolescente':
//           (edad>=18 && edad<60) ? 'adulto' : 'adulto mayor';    
//     }
//     return clasificacion;

// }
// console.log(clasificacionEdad(edad))

/*Algoritmo 4: Sistema de evaluación de crédito bancario
Este algoritmo evalúa la elegibilidad de una persona para un crédito bancario basándose en múltiples
factores como edad, ingresos y si tiene o no otras deudas.
Descripción del algoritmo:
 Se ingresa la edad, el nivel de ingresos y si tiene deudas.
 Si la persona tiene menos de 18 años o tiene deudas, el crédito es rechazado.
 Si tiene más de 18 años, ingresos superiores a $2000 y no tiene deudas, el crédito es aprobado.*/

// let edad=prompt('Ingrese su edad: ');
// let ingresos=prompt('Coloque sus ingresos: ');
// let deudas=prompt('Diga si tiene deudas si o no: ');

// function aprobacionCredito(edad,ingresos,deudas){
//     let aprobacion=
//     (edad<18 || deudas==='si') ? 'Rechazado' :
//     (edad>=18 && ingresos> 2000 && deudas==='no') ? 'Aprobado' : 'Rechazado';
    
//     return aprobacion;
// }
// console.log(aprobacionCredito(edad,ingresos,deudas))

/*Algoritmo 5: Sistema de clasificación de IMC (Índice de Masa Corporal)
Este algoritmo calcula el IMC de una persona y clasifica el resultado en varias categorías, como "Bajo
peso", "Normal", "Sobrepeso" y "Obesidad".
Descripción del algoritmo:
 Se ingresan el peso y la altura de una persona.
 Se calcula el IMC.
 Se clasifica el IMC en distintas categorías utilizando if-else if.*/

// let peso=prompt('Ingrese su peso: ');
// let estatura=prompt('Ingrese su estatura: ');

// function masaCorporal(peso,estatura){
//     let imc= peso/(estatura*estatura);
//     let estado=
//     (imc <18.5) ? 'Bajo de peso' :
//     (imc >=18.5 && imc <=24.9) ? 'Peso normal' :
//     (imc >=25 && imc <=29.9) ? 'Sobrepeso' :
//     (imc >= 30) && 'Obesidad';

//     return 'Su indice de masa corporal es: ' + imc + ' Su estado es: ' + estado;
// }

// console.log(masaCorporal(peso,estatura))

/*EJERCICIO RETO DE PROGRAMACIÓN
Desarrollar un algoritmo que permita calcular el costo de parqueadero de vehiculos de acuerdo con su
categoria. Aplicando las siguientes condiciones:
Cupo maximo de 10 vehiculos por cada tipo de vehiculo
Cobro por hora y mensual
Descuento del 50 % para cliente privilegiado
Descuento del 20 % si es Estudiante.
Para Funcionarios del gobierno la tarifa es de un 15 % de valor adicional.
Utilice estructuras Switch - If*/

// function parqueadero() {
//     let usuario = '';
//     let nombre = '';
//     let tiempo = '';
//     let cantidadHoras = 0;
//     let meses = 0;
//     let tipoVehiculo = '';
//     let contadorMoto = 0;
//     let contadorCarro = 0;
//     let contadorCamion = 0;
//     let valorHoraMoto = 10;
//     let valorHoraCarro = 20;
//     let valorHoraCamion = 30;
//     let valorMesMoto = 500;
//     let valorMesCarro = 1000;
//     let valorMesCamion = 1500;
//     let valorMotos = 0;
//     let valorCarros = 0;
//     let valorCamion = 0;
//     let ingreso = 'si'; 

//     while (ingreso === 'si') {
//         usuario = prompt('Ingrese el tipo de usuario privilegiado/estudiante/funcionario: ');
//         nombre = prompt('Ingrese el nombre: ');
//         tiempo = prompt('Ingrese el tiempo que desea el servicio, mensual/horas: ');

//         if (tiempo === 'horas') {
//             cantidadHoras = prompt('Ingrese las horas: ');
//         }

//         if (tiempo === 'mensual') {
//             meses = prompt('Ingrese los meses: ');
//         }

//         tipoVehiculo = prompt('Ingrese el tipo de vehiculo moto/carro/camion:');
//         contadorMoto = tipoVehiculo === 'moto' ? contadorMoto + 1 : contadorMoto;
//         contadorCarro = tipoVehiculo === 'carro' ? contadorCarro + 1 : contadorCarro;
//         contadorCamion = tipoVehiculo === 'camion' ? contadorCamion + 1 : contadorCamion;

//         if (tipoVehiculo === 'moto' && contadorMoto > 10) {
//             console.log('No se puede ingresar más de 10 motos');
//             return '¡Muchas gracias!';
//         }

//         if (tipoVehiculo === 'carro' && contadorCarro > 10) {
//             console.log('No se puede ingresar más de 10 carros');
//             return'¡Muchas gracias!';
//         }

//         if (tipoVehiculo === 'camion' && contadorCamion > 10) {
//             console.log('No se puede ingresar más de 10 camiones');
//             return'¡Muchas gracias!';
//         }

//         switch (usuario) {
//             case 'privilegiado':
//                 if (tiempo === 'horas') {
//                     valorMotos = (cantidadHoras * valorHoraMoto) - ((cantidadHoras * valorHoraMoto) * 0.5);
//                     valorCarros = (cantidadHoras * valorHoraCarro) - ((cantidadHoras * valorHoraCarro) * 0.5);
//                     valorCamion = (cantidadHoras * valorHoraCamion) - ((cantidadHoras * valorHoraCamion) * 0.5);
//                 }
//                 if (tiempo === 'mensual') {
//                     valorMotos = (meses * valorMesMoto) - ((meses * valorMesMoto) * 0.5);
//                     valorCarros = (meses * valorMesCarro) - ((meses * valorMesCarro) * 0.5);
//                     valorCamion = (meses * valorMesCamion) - ((meses * valorMesCamion) * 0.5);
//                 }
//                 break;
//             case 'estudiante':
//                 if (tiempo === 'horas') {
//                     valorMotos = (cantidadHoras * valorHoraMoto) - ((cantidadHoras * valorHoraMoto) * 0.2);
//                     valorCarros = (cantidadHoras * valorHoraCarro) - ((cantidadHoras * valorHoraCarro) * 0.2);
//                     valorCamion = (cantidadHoras * valorHoraCamion) - ((cantidadHoras * valorHoraCamion) * 0.2);
//                 } 
//                 if (tiempo === 'mensual') {
//                     valorMotos = (meses * valorMesMoto) - ((meses * valorMesMoto) * 0.2);
//                     valorCarros = (meses * valorMesCarro) - ((meses * valorMesCarro) * 0.2);
//                     valorCamion = (meses * valorMesCamion) - ((meses * valorMesCamion) * 0.2);
//                 }
//                 break;
//             case 'funcionario':
//                 if (tiempo === 'horas') {
//                     valorMotos = (cantidadHoras * valorHoraMoto) + ((cantidadHoras * valorHoraMoto) * 0.15);
//                     valorCarros = (cantidadHoras * valorHoraCarro) + ((cantidadHoras * valorHoraCarro) * 0.15);
//                     valorCamion = (cantidadHoras * valorHoraCamion) + ((cantidadHoras * valorHoraCamion) * 0.15);
//                 } 
//                  if (tiempo === 'mensual') {
//                     valorMotos = (meses * valorMesMoto) + ((meses * valorMesMoto) * 0.15);
//                     valorCarros = (meses * valorMesCarro) + ((meses * valorMesCarro) * 0.15);
//                     valorCamion = (meses * valorMesCamion) + ((meses * valorMesCamion) * 0.15);
//                 }
//                 break;
//         }

//         switch (tipoVehiculo) {
//             case 'moto':
//                 console.log(nombre + ' el valor a pagar por la moto es: ' + valorMotos);
//                 break;
//             case 'carro':
//                 console.log(nombre + ' el valor a pagar por el carro es: ' + valorCarros);
//                 break;
//             case 'camion':
//                 console.log(nombre + ' el valor a pagar por el camión es: ' + valorCamion);
//                 break;
//         }
//         ingreso = prompt('Desea ingresar otro vehiculo si/no: ');
//     }
//     return '¡Muchas gracias!';
// }

// console.log(parqueadero());


/***************Solucion mostrando en el navegador capturando elementos en el DOM**********************************/

/*EJERCICIO RETO DE PROGRAMACIÓN
Desarrollar un algoritmo que permita calcular el costo de parqueadero de vehiculos de acuerdo con su
categoria. Aplicando las siguientes condiciones:
Cupo maximo de 10 vehiculos por cada tipo de vehiculo
Cobro por hora y mensual
Descuento del 50 % para cliente privilegiado
Descuento del 20 % si es Estudiante.
Para Funcionarios del gobierno la tarifa es de un 15 % de valor adicional.
Utilice estructuras Switch - If*/

/*Capturamos los elementos del html*/

// const ingresoVehiculos = document.querySelector(' .ingresoVehiculos');
// const formularioPrincipal = document.querySelector('.formularioParqueadero');
// const usuario = document.querySelector('.inputUsuario');
// const nombre = document.querySelector('.inputNombre');
// const botonMes = document.querySelector('.botonMes');
// const botonHoras = document.querySelector('.botonHoras');
// const inputHoras = document.querySelector('.inputHoras');
// const inputMes = document.querySelector('.inputMes');
// const tipo=document.querySelector('.inputTipoVehiculo');
// const botonPagar=document.querySelector('.pagar');
// const formularioContinuarIngreso=document.querySelector('.formularioIngreso');
// const confirmarOtroIngreso=document.querySelector('.confirmacionOtroIngreso');
// const noMasIngresos=document.querySelector('.confirmacionNoMasIngreso');
// const mensajeSalida=document.querySelector('.terminacion');

// /*variables*/

// let contadorMoto = 0;
// let contadorCarro = 0;
// let contadorCamion = 0;
// let tiempo='';
// let valorMotos = 0;
// let valorCarros = 0;
// let valorCamion = 0;
// let cantidadHoras=0;
// let valorHoraMoto = 1000;
// let valorHoraCarro = 2000;
// let valorHoraCamion = 3000;
// let valorMesMoto = 50000;
// let valorMesCarro = 100000;
// let valorMesCamion = 150000;

// /*Manejo del evento onclick en el boton de ingreso*/
// ingresoVehiculos.addEventListener('click', function(){
//     formularioPrincipal.style.visibility='visible';
//     ingresoVehiculos.style.visibility='hidden';
// });

// /*Manejo del evento onclick en el boton de las horas*/
// botonHoras.addEventListener('click', function(e) {
//     e.preventDefault();  
//     tiempo='horas';
//     inputHoras.style.visibility = 'visible';
//     inputMes.style.visibility = 'hidden';
// });

// /*Manejo del evento onclick en el boton de meses*/
// botonMes.addEventListener('click', function(e) {
//     e.preventDefault();
//     tiempo='mensual';
//     inputMes.style.visibility = 'visible';
//     inputHoras.style.visibility = 'hidden';
// });

// /*Manejo del evento onclick en el boton de mas ingresos*/
// confirmarOtroIngreso.addEventListener('click', function(){
//     formularioPrincipal.style.visibility='visible';
//     formularioContinuarIngreso.style.visibility='hidden';
// });

// /*Manejo del evento onclick en el boton de no mas ingresos*/
// noMasIngresos.addEventListener('click', function(){
//     formularioContinuarIngreso.style.visibility='hidden';
//     ingresoVehiculos.style.visibility='visible';
//     mensajeSalida.style.visibility='visible';

//     setTimeout(function() {
//         mensajeSalida.style.visibility = 'hidden';
//     }, 5000);
    
// })

// /*Manejo del evento onclick en el boton de pagar*/

// botonPagar.addEventListener('click', function(e){
//     e.preventDefault();

//     formularioContinuarIngreso.style.visibility='visible';
//     formularioPrincipal.style.visibility='hidden';
//     inputMes.style.visibility = 'hidden';
//     inputHoras.style.visibility = 'hidden';


//     contadorMoto = (tipo.value === 'moto' && contadorMoto<=10) ? contadorMoto + 1 : contadorMoto;
//     console.log('motos: ' + contadorMoto);
//     contadorCarro = (tipo.value === 'carro' && contadorCarro<=10) ? contadorCarro + 1 : contadorCarro;
//     console.log('carros: ' + contadorCarro);
//     contadorCamion = (tipo.value === 'camion' && contadorCamion<=10)? contadorCamion + 1 : contadorCamion;
//     console.log('camiones: ' + contadorCamion);

//     if (tipo.value === 'moto' && contadorMoto >10) {
//         alert('No se puede ingresar más de 10 motos');
//         /*Limpio los input*/
//         usuario.value='';
//         nombre.value='';
//         tipo.value='';
//         inputHoras.value='';
//         inputMes.value='';

//         return;
//     }
//     if (tipo.value === 'carro' && contadorCarro >10) {
//         alert('No se puede ingresar más de 10 carros');
//         /*Limpio los input*/
//         usuario.value='';
//         nombre.value='';
//         tipo.value='';
//         inputHoras.value='';
//         inputMes.value='';
//         return;
//     }
//     if (tipo.value === 'camion' && contadorCamion >10) {
//         alert('No se puede ingresar más de 10 camiones');
//         /*Limpio los input*/
//         usuario.value='';
//         nombre.value='';
//         tipo.value='';
//         inputHoras.value='';
//         inputMes.value='';
//         return;
//     }

//     switch (usuario.value) {
//         case 'privilegiado':
//             if (tiempo === 'horas') {
//                 valorMotos = (inputHoras.value * valorHoraMoto) - ((inputHoras.value * valorHoraMoto) * 0.5);
//                 valorCarros = (inputHoras.value * valorHoraCarro) - ((inputHoras.value * valorHoraCarro) * 0.5);
//                 valorCamion = (inputHoras.value * valorHoraCamion) - ((inputHoras.value * valorHoraCamion) * 0.5);
//             }
//             if (tiempo === 'mensual') {
//                 valorMotos = (inputMes.value * valorMesMoto) - ((inputMes.value * valorMesMoto) * 0.5);
//                 valorCarros = (inputMes.value * valorMesCarro) - ((inputMes.value * valorMesCarro) * 0.5);
//                 valorCamion = (inputMes.value * valorMesCamion) - ((inputMes.value * valorMesCamion) * 0.5);
//             }
//         break;
//         case 'estudiante':
//             if (tiempo === 'horas') {
//                 valorMotos = (inputHoras.value * valorHoraMoto) - ((inputHoras.value * valorHoraMoto) * 0.2);
//                 valorCarros = (inputHoras.value * valorHoraCarro) - ((inputHoras.value * valorHoraCarro) * 0.2);
//                 valorCamion = (inputHoras.value * valorHoraCamion) - ((inputHoras.value * valorHoraCamion) * 0.2);
//             } 
//             if (tiempo === 'mensual') {
//                 valorMotos = (inputMes.value * valorMesMoto) - ((inputMes.value * valorMesMoto) * 0.2);
//                 valorCarros = (inputMes.value * valorMesCarro) - ((inputMes.value * valorMesCarro) * 0.2);
//                 valorCamion = (inputMes.value * valorMesCamion) - ((inputMes.value * valorMesCamion) * 0.2);
//             }
//         break;
//         case 'funcionario':
//             if (tiempo === 'horas') {
//                 valorMotos = (inputHoras.value * valorHoraMoto) + ((inputHoras.value * valorHoraMoto) * 0.15);
//                 valorCarros = (inputHoras.value * valorHoraCarro) + ((inputHoras.value * valorHoraCarro) * 0.15);
//                 valorCamion = (inputHoras.value * valorHoraCamion) + ((inputHoras.value * valorHoraCamion) * 0.15);
//             } 
//              if (tiempo === 'mensual') {
//                 valorMotos = (inputMes.value * valorMesMoto) + ((inputMes.value * valorMesMoto) * 0.15);
//                 valorCarros = (inputMes.value * valorMesCarro) + ((inputMes.value * valorMesCarro) * 0.15);
//                 valorCamion = (inputMes.value * valorMesCamion) + ((inputMes.value * valorMesCamion) * 0.15);
//             }
//         break;
//        }

//     switch (tipo.value) {
//         case 'moto':
//             alert(nombre.value + ' el valor a pagar por la moto es: ' + valorMotos);
//         break;
//         case 'carro':
//             alert(nombre.value + ' el valor a pagar por el carro es: ' + valorCarros);
//         break;
//         case 'camion':
//              alert(nombre.value + ' el valor a pagar por el camión es: ' + valorCamion);
//         break;
//     }

//     /*Limpio los input cada que se da click en el boton pagar*/
//     usuario.value='';
//     nombre.value='';
//     tipo.value='';
//     inputHoras.value='';
//     inputMes.value='';

// })

/************************1.Imprimir una secuencia de números ***************************/

// let num = (prompt('Ingrese la cantidad de numero que desea imprimir: ' ));

// for(let i=1;i<=num;i++){
//     console.log('Numero:' +i + ' : ' + i  )
// }

/***************************2. Mostrar la serie fibonacci******************************/

// let num = (prompt('Ingrese el numero hasta donde debe llegar la secuencia fobonacci: ' ));
// function fibonacci(limite){
//    let a=0;
//    let b=1;
//    let array=[]
//    for(i=1;i<=limite;i++){
//       array.push(a)
//       let fibo=a+b;
//       a=b;
//       b=fibo
//    }
//    return array;
// }
// console.log(fibonacci(num))

/*******************3. solicitar números e ir sumando posteriormente mostrar el resultado de la suma.****************/

// let cantidadNumeros= Number(prompt('Ingresa cuantos numero quieres sumar: '));

// function sumaNumeros(cantidad){
//     let acumulador=0;
//     for(let i=1;i<=cantidad;i++){
//         let num= Number(prompt('Ingresa el numero ' + i + ' que quieres sumar: '));
//         acumulador +=num;
//     }
//     return('La suma de los ' +  cantidad + ' numeros es: ' + acumulador);
// }

// console.log(sumaNumeros(cantidadNumeros));


/**********  calcular potencia de un número ingresando base y exponente ( debe ser con ciclo no con Match ).**********/

// let base=Number(prompt('Ingrese el numero base: '));
// let exponente= Number(prompt('Ingrese el exponente: '));
// let acumulador=1;

// function calcularPotencia(base,exponente){
//     for(let i=0; i<exponente;i++){
//         acumulador*= base;
//     }
//     return('La potencia de ' + base + ' a la ' + exponente + ' es: ' + acumulador);
// }
// console.log(calcularPotencia(base,exponente))


/**********Ejecutar cualquier operación de manera repetida y terminar la ejecución ingresando una palabra**********/

// let ejecucion='si';

// function repeticion(){
//     while(ejecucion==='si'){
//         console.log('Hola Emmanuel');
//         ejecucion=prompt('Ingrese si desea continuar con el saludo: si/no ');
//     }
//     return('Has terminado seccion');
// }
// console.log(repeticion());

/**** Reto 1: Secuencia Numérica Alternante
Crea un programa que, dado un número n, genere una secuencia de n números donde se alternen los signos de los números naturales de la siguiente manera: 1, -2, 3, -4, 5, -6, ....
Requisitos:
Utiliza un ciclo for para generar la secuencia.
Usa condicionales para alternar los signos (+ y -).
Ejemplo: Si n = 6, la salida debe ser: 1, -2, 3, -4, 5, -6.
Pista: La clave está en usar la posición del número (par o impar) para decidir el signo.
*****/

// let numerosAImprimir= prompt('Ingres la cantidad de numeros que desea imprimir: ');
// let array=[];
// function impresion(num){
//     for(let i=1; i<=num;i++){
//         if(i%2!==0){
//             array.push(i);
//         }
//         else{
//             array.push(i*-1);
//         }
//     }
//     return array;
// }
// console.log(impresion(numerosAImprimir));

/*Reto 2: Números Primos en un Rango
Escribe un programa que encuentre todos los números primos entre 1 y un número dado n. Un número primo es aquel que solo es divisible por 1 y por sí mismo.
Requisitos:
Usa un ciclo for para iterar sobre todos los números en el rango.
Dentro del ciclo, otro for para verificar si cada número es primo.
Aplica condicionales para determinar si un número tiene divisores o no.
Ejemplo: Si n = 10, la salida debe ser: 2, 3, 5, 7.
Pista: Tendrás que verificar cada número para ver si tiene divisores entre 2 y n-1, usando condicionales dentro del ciclo.*/

// let numero=prompt('Ingresa un numero para saber cuantos primos hay entre 1 y ese numero: ');

// function numeroPrimos(numero){
//     let contador=0;
//     let array=[];
//     for(let i=1;i<=numero;i++){
//         for(let x=1;x<=i;x++){
//             if(i%x===0){
//                 contador++;
//             }
//         }
//         if(contador===2){
//             array.push(i);
//         }
//         contador=0;
//     }
//     return array;
// }
// console.log(numeroPrimos(numero))

/***************************************************EJERCICIOS*****************************************/

function main(){

    // setTimeout(function jubilacion(){

    //     // Ejercicio 1
    //     // * Calcular cuantos años y semanas de cotizacion le falta a una persona para que se jubile.
    //     // * Un hombre se jubila a los 62 años de edad.
    //     // Una Mujer se jubila a los 57 años de edad.
    //     // Enviar como datos a la función su año de nacimiento y su nombre.

    // console.log('\n*****************************Ejercicio 1 *********************************');
    //     let nombre=prompt('Ingrese su nombre: ')
    //     let nacimiento= new Date(prompt('Ingrese su fecha nacimiento: '));
    //     let genero=prompt('Ingrese su genero hombre/mujer: ');
    //     let semanaCotizadas=Number(prompt('Ingrese las semanas cotizadas: '));
    //     let yearPendientes=0;
    //     let semanaPendientes=0;
    //     let hoy=new Date();
    //     let edad= hoy.getFullYear() - nacimiento.getFullYear();
    
    //         switch(genero){
    //             case 'hombre':
    //                 if(edad<=0){
    //                     console.log('Fecha de nacimiento incorrecta')
    //                 }
    //                 if(edad<18){
    //                     console.log('Usted es menor de edad')
    //                 }
    //                 if(edad>=62 && semanaCotizadas>=1300){
    //                     console.log( nombre + ' usted tiene la edad y semanas completas para pensionarse');
    //                 }
    //                 if(edad>=62 && semanaCotizadas<1300){
    //                     semanaPendientes= 1300-semanaCotizadas;
    //                     console.log( nombre + ' usted tiene la edad para pensionarse pero le faltan ' + semanaPendientes + ' semanas de cotizacion para poder pensionarse');
    //                 }
    //                 if(edad<62 && semanaCotizadas>=1300){
    //                     yearPendientes= 62-edad;
    //                     console.log( nombre + ' usted tiene ' + semanaCotizadas + ' semanas pero le faltan ' + yearPendientes +  ' años para cumplir la edad y poder pensionarse ');
    //                 }
    //                 if(edad<62 &&  edad>=18 && semanaCotizadas<1300){
    //                     yearPendientes= 62-edad;
    //                     semanaPendientes= 1300-semanaCotizadas;
    //                     console.log(nombre + ' su edad es ' + edad + ' le faltan ' + yearPendientes + ' años para llegar a la edad de pension y ' + semanaPendientes + ' semanas de cotizacion para pensionarse');
    //                 }  
    //             break;
    //             case 'mujer':
    //                 if(edad<=0){
    //                     console.log('Fecha de nacimiento incorrecta')
    //                 }
    //                 if(edad<18){
    //                     console.log('Usted es menor de edad')
    //                 }
    //                 if(edad>=57 && semanaCotizadas>=1000){
    //                     console.log( nombre + ' usted tiene la edad y semanas completas para pensionarse');
    //                 }
    //                 if(edad>=57 && semanaCotizadas<1000){
    //                     semanaPendientes= 1000-semanaCotizadas;
    //                     console.log( nombre + ' usted tiene la edad para pensionarse pero le faltan ' + semanaPendientes + ' semanas de cotizacion para poder pensionarse');
    //                 }
    //                 if(edad<57 && semanaCotizadas>=1000){
    //                     yearPendientes= 57-edad;
    //                     console.log( nombre + ' usted tiene ' + semanaCotizadas + ' semanas pero le faltan ' + yearPendientes +  ' años para cumplir la edad y poder pensionarse ');
    //                 }
    //                 if(edad<57 &&  edad>=18 && semanaCotizadas<1000){
    //                     yearPendientes= 57-edad;
    //                     semanaPendientes= 1000-semanaCotizadas;
    //                     console.log(nombre + ' su edad es ' + edad + ' le faltan ' + yearPendientes + ' años para llegar a la edad de pension y ' + semanaPendientes + ' semanas de cotizacion para pensionarse');
    //                 }  
    //             break;
    //             default:
    //                 console.log('genero incorrecto')
    //         }
    //         return;

    // }, 2000);



    /*Funcion problema2 evaluacion*/

    // setTimeout(function evaluacion(){

    // // Ejercicio 2
    // // Implementar una función que nos permita evaluar el
    // // porcentaje de respuestas positivas y negativas de un examen
    // // La función debe recibir el nombre, y la cantidad de
    // // respuestas positivas y negativa
    // // La función debe calcular el porcentaje que representa cada
    // // tipo de respuesta, en una base de 100 preguntas.
    // // De las respuestas positivas se define el score de la persona en:
    // // A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)

    //     console.log('\n*****************************Ejercicio 2 *********************************');
    //     let nombre=prompt('Ingrese el nombre: ');
    //     let respuestasPositivas=Number(prompt('Ingrese el numero de respuestas positivas: '));
    //     let preguntas=100;
    //     let score='';

    //     let porcentajePositivo=respuestasPositivas/preguntas;
    //     let porcentajeNegativo=(preguntas-respuestasPositivas)/preguntas;

    //     if(porcentajePositivo.toFixed(2)>=0.9){
    //        score='A';
    //     }
    //     if(porcentajePositivo.toFixed(2)>=0.7 && porcentajePositivo.toFixed(2)<=0.89){
    //         score='B';
    //      }
    //      if(porcentajePositivo.toFixed(2)>=0.45 && porcentajePositivo.toFixed(2)<=0.69){
    //         score='C';
    //      }
    //      if(porcentajePositivo.toFixed(2)<0.45){
    //         score='D';
    //      }

    //      return console.log('\n*******Clasificacion: A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)*******\n' + nombre + ' su porcentaje de respuestas correctas en la evaluacion fue el ' + (porcentajePositivo * 100) + '% \nPorcentaje de respuestas incorrectas en la evaluacion fue el ' + (porcentajeNegativo*100) + '%\nLa clasificacion de su puntaje es: ' + score);
        

    // }, 1000);



     /*Funcion problema3 transporte*/
    setTimeout(function transporte(){
        // Ejercicio 3
        // Una Empresa de transporte de carga requiere implementar un software que
        // permita distribuir las cargas a nivel nacional en la diferentes bodegas que
        // tiene en cada ciudad utilizando una flota que maneja 4 categorías de carga
        // en tonelaje, cada categoria solo cuenta con 5 vehículos Desarrolle un
        // algoritmo que permita:
        // capturar los datos del Cliente (Nombre y Nit )
        // Obtener el punto de partida de la carga y destino de la carga ( ciudad y
        // toneladas a transportar)
        // Calcular los kilómetros de recorrido de la carga. Mostrar resultados
        // Calcular el costo de transporte.
        // Cada vez que se ejecute una operación debe mostrar la disponibilidad de
        // vehículos.
        
        // Construya los algoritmos con las siguientes reglas:
        // Utilice, las estructuras de programación de javaScript que se consideren,
        // Control, Arreglos, funciones.
        
        // Aplique el modo Asíncrono en cada ejercicio.
        // Utilice SetTimeOut para dar un tiempo de ejecución a cada uno de los
        // algoritmos planteados en este taller

        console.log('\n*****************************Ejercicio 3 *********************************');
        let continuar='si';
        let contadorTractomulas=0;
        let contadorCamiones=0;
        let contadorTurbo=0;
        let contadorSencillo=4;
        const kilometrosRuta1=457;
        const kilometrosRuta2=442;
        const kilometrosRuta3=1253;
        const kilometrosRuta4=1137;
        let valorKilometroTractomula=1270;
        let valorKilometroCamion=1000;
        let valorKilometroTurbo=800;
        let valorKilometroSencillo=650;
        let valor=0;
        while(continuar==='si'){
            let nombre= prompt('Ingrese su nombre: ');
            let nit= prompt('Ingrese el numero de Nit: ');
            console.log('\n***************************Rutas Disponibles***************************\n');
            console.log('Ruta 1: cali-bogota/bogota-cali: 457 kilometros');
            console.log('Ruta 2: cali-medellin/medellin-cali: 442 kilometros');
            console.log('Ruta 3: cali-barranquilla/barranquilla-cali: 1253 kilometros');
            console.log('Ruta 4: cali-cartagena/cartagena-cali: 1137 kilometros\n');
            let ruta=prompt('Ingrese la ruta de su carga 1/2/3/4: ');

            if(ruta>=1 && ruta<=4){ // si la ruta es valida sigue con la ejecucion si no entra en un else y se corta

                console.log('\n***************************Vehiculos por toneladas***************************\n');
                console.log('Tractomula: 16 a 30 toneladas / precioKilometro=1270 / vehiculos disponibles: ' + (5-contadorTractomulas) );
                console.log('Camion: 9 a 15 toneladas / precioKilometro=1000 / vehiculos disponibles: ' + (5-contadorCamiones));
                console.log('Turbo: 6 a 8 toneladas / precioKilometro=800 / vehiculos disponibles: ' + (5-contadorTurbo));
                console.log('Sencillo: 1 a 5 toneladas / precioKilometro=650 / vehiculos disponibles: ' + (5-contadorSencillo) + '\n');
                let toneladas=Number(prompt('Ingrese las toneladas que desea transportar: '));
                if(toneladas>=1 && toneladas<=30){ // si las toneladas son validas sigue con la ejecucion si no entra en un else y se corta
                    if(toneladas>1 && toneladas<=5){
                        if(contadorSencillo<5){
                            contadorSencillo++;
                            switch(ruta){
                                case '1':
                                    valor=valorKilometroSencillo*kilometrosRuta1;
                                break;
                                case '2':
                                    valor=valorKilometroSencillo*kilometrosRuta2;
                                break;
                                case '3':
                                    valor=valorKilometroSencillo*kilometrosRuta3;
                                break;
                                case '4':
                                    valor=valorKilometroSencillo*kilometrosRuta4;
                                break;
                            }
                            console.log('\nEmpresa '+ nombre + ' con numero de NIT: ' + nit + ' El valor a pagar por su carga es: $' + valor + ' pesos\n')
                        }
                        else{
                            console.log('No hay sencillos disponibles: ')
                        }
                    };
                    if(toneladas>5 && toneladas<=8){
                        if(contadorTurbo<5){
                            contadorTurbo++;
                            switch(ruta){
                                case '1':
                                    valor=valorKilometroTurbo*kilometrosRuta1;
                                break;
                                case '2':
                                    valor=valorKilometroTurbo*kilometrosRuta2;
                                break;
                                case '3':
                                    valor=valorKilometroTurbo*kilometrosRuta3;
                                break;
                                case '4':
                                    valor=valorKilometroTurbo*kilometrosRuta4;
                                break;
                            }
                            console.log('\nEmpresa '+ nombre + ' con numero de NIT: ' + nit + ' El valor a pagar por su carga es: $' + valor + ' pesos\n')
                        }
                        else{
                            console.log('No hay Turbos disponibles: ')
                        }
                    };
                    if(toneladas>8 && toneladas<=15){
                        if(contadorCamiones<5){
                            contadorCamiones++;
                            switch(ruta){
                                case '1':
                                    valor=valorKilometroCamion*kilometrosRuta1;
                                break;
                                case '2':
                                    valor=valorKilometroCamion*kilometrosRuta2;
                                break;
                                case '3':
                                    valor=valorKilometroCamion*kilometrosRuta3;
                                break;
                                case '4':
                                    valor=valorKilometroCamion*kilometrosRuta4;
                                break;
                            }
                            console.log('\nEmpresa '+ nombre + ' con numero de NIT: ' + nit + ' El valor a pagar por su carga es: $' + valor + ' pesos\n')
                        }
                        else{
                            console.log('No hay Camiones disponibles: ')
                        }
                    };
                    if(toneladas>15 && toneladas<=30){
                        if(contadorTractomulas<5){
                            contadorTractomulas++;
                            switch(ruta){
                                case '1':
                                    valor=valorKilometroTractomula*kilometrosRuta1;
                                break;
                                case '2':
                                    valor=valorKilometroTractomula*kilometrosRuta2;
                                break;
                                case '3':
                                    valor=valorKilometroTractomula*kilometrosRuta3;
                                break;
                                case '4':
                                    valor=valorKilometroTractomula*kilometrosRuta4;
                                break;
                            }
                            console.log('\nEmpresa '+ nombre + ' con numero de NIT: ' + nit + ' El valor a pagar por su carga es: $' + valor + ' pesos\n')
                        }
                        else{
                            console.log('No hay Tractomulas disponibles: ')
                        }
                    }
                    continuar=prompt('Desea continuar con otro cargue si/no: ');
                }
                else{ //else si las toneladas son invalidas
                    console.log('Las toneladas ingresadas no son validas');
                    continuar=prompt('Desea continuar con otro cargue si/no: ');
                }
                
            }
            else{ // else si la ruta es invalida
                console.log('Ruta invalida');
                continuar=prompt('Desea continuar con otro cargue si/no: ');
           }
        }
    }, 4000);
}
main();




















