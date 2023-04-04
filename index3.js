const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Nuevo Usuario Creado');
});

app.listen(PORT, () =>{
    console.log(`Servidor iniciado en: http://localhost.com:${PORT}`);
});