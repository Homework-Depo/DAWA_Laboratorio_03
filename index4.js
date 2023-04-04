const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;

app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username);
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const { x, y } = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.get('/username/:username/photo', (req, res) => {
    if (req.params.username.toUpperCase() === "JAVIER") {
        return res.sendFile('./trafalgar_square.jpg', {
            root: path.join(__dirname, '/public/img/')
        })
    }

    res.send('<h1>El usuario no tiene acceso!</h1>')
})

app.get('/name/:name/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años...!!!`)
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado en: http://localhost.com:${PORT}`);
});