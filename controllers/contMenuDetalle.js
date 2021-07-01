const express= require('express');
const controlador= {
    home: (req, res)=>{
        res.render('index');
    },
    detalle: (req, res)=>{
        const idPlato= req.params.id;
        const platos= [
            {
                nombre: 'Carpaccio fresco',
                precio: 65.50, 
                img: 'carpaccio.jpg',
                id: 1
            }, 
            {
                nombre: 'Risotto de berenjena',
                descripcion: 'Risotto de berenjena y queso de cabra',
                img: 'risottoBerenjena.jpg',
                precio: 47.00, 
                id: 2
            }, 
            {
                nombre: 'Mousse de arroz',
                descripcion: 'Mousse de arroz con leche y aroma de azahar',
                img: 'mousseArroz.jpg',
                precio: 27.50, 
                id: 3
            }, 
            {
                nombre: 'Espárragos blancos',
                descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
                img: 'esparragos.png', 
                precio: 37.50, 
                id: 4
            }
        ]
        const seleccion= platos.find(plato=>plato.id == idPlato);
        if (!seleccion){
            res.render('error', {mensaje: 'No se pudo encontrar el menú'});
        }
        if (!seleccion.descripcion){
            seleccion.descripcion= 'Plato típico';
        }
        res.render('detalleMenu', seleccion);
    }
}
module.exports= controlador;