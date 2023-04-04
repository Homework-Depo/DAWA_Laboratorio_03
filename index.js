const express = require('express');
const app = express();
const PORT = 3000;

app.get('/products', (req, res) => {
    res.send('lista de productos');
});

app.post('/products', (req, res) => {
    res.send('creando productos');
});

app.put('/products', (req, res) => {
    res.send('actualizando productos');
});

app.delete('/products', (req, res) => {
    res.send('eliminando productos');
});

app.patch('/products', (req, res) => {
    res.send('actualizando una parte del productos');
});

app.listen(PORT, () =>{
    console.log(`Servidor iniciado en: http://localhost.com:${PORT}`);
});