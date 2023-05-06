 // sección de llamado de librerias

 const express = require('express');
 const bodyParser = require('body-parser');

 const appi = express();
 const port = 3000;
 // crear nuestras rutas

 const routes ={
    exp: "/example",
    postApi: "/mipost"

 };

 // instanciar recursos de la Api

 appi.use(bodyParser.json());

 appi.get(routes.exp, (req, res) =>{
    const responseStruct = {
        status: 'Ok Good my friend',
        code: 1 
    }
    res.json(responseStruct);
 });

 appi.post(routes.postApi, (req, res) =>{
    try{
        const {numberOne, numberTwo, operation} = req.body;
        if (numberOne == null || numberTwo == null ||operation==null) throw({message: "Faltan datos para la operacion"})
        if(operation > 4) throw ({message: "Solo hay operaciones de 1 al 4"})
        if(operation == 1){
            const result = numberOne+numberTwo;
        res.json({
            status: "Ok baby",
            result
        });
        }
        if(operation == 2){
            const result = numberOne-numberTwo;
        res.json({
            status: "Ok darling",
            result
        });
        }
        if(operation == 3){
            const result = numberOne*numberTwo;
        res.json({
            status: "sure thing",
            result
        });
        }
        if(operation == 4){
            if(numberTwo == 0) throw ({message: "No se puede dividir por 0"})
            const result = numberOne/numberTwo;
        res.json({
            status: "of course",
            result
        });
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }

 })

 //subir servidor

 appi.listen(port, () => console.log("application running on port " + port));