import express from 'express';
import usuarioRoutes from '../bienesRaices/routes/usuarioRoutes.js';// importo el archivo que maneja el ruteo

const app= express(); // creo una constante app que contiene mi aplicacion express

app.use('/', usuarioRoutes); // Defino el uso del ruteo de mi archivo de rutas

// app.get('/', (req,respo)=>{
//     respo.send('aplicacion con express');
// })

// app.get('/nosotros', (req, respo)=>{
//     respo.send('Informacion de nosotros')
// })

app.listen(3000, ()=>{
    console.log('escuchando en el puerto 3000'); // defino el puerto de salida de mi aplicacion
})