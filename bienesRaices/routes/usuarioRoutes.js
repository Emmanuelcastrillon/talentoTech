import express from 'express'; // Importo la dependencia express

const router= express.Router(); // Creo una constante y le asigno la funcion express

router.get('/', (req,res)=>{
    res.json({msm:'Enviamos un mensaje de tipo json utilizando get'}) // Defino una ruta con el metodo get
})

router.post('/', (req,res)=>{
    res.json({msm:'Enviamos un mensaje de tipo json utilizando Post'}) // Defino una ruta con el metodo post
})

export default router; // Exporto por defecto mi archivo de ruteo