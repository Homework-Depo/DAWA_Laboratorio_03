const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/myfile', (req, res) => {
    res.sendFile("./trafalgar_square.jpg", {
        root: path.join(__dirname, '/public/img/')
    });
});

app.get('/user', (req, res) => {
    res.json({
        nombre: 'Javier',
        apellido: 'Aponte',
        edad: 26,
        points: [1, 2, 3],
        address: {
            ciudad: 'Lima - Peru',
            distrito: 'Ate',
            calle: 'Av. Sin Nombre'
        }
    })
})


app.get('/isAlive', (req, res) => {
    res.sendStatus(204);
})

app.listen(PORT, () =>{
    console.log(`Servidor iniciado en: http://localhost.com:${PORT}`);
});