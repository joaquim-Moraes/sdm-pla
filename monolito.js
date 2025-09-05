const express = require('express');

const app = express();


app.use(express.json());

let usuarios = []


let pedidos = []

// Criando Rotas de Usuarios
app.post('/usuarios', (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario);
    res.send({message :'Usuario agregado'});
})

// Criando Rota de Pedidos 

app.post('/pedidos', (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({message :'Pedido agregado'});
})


app.get('/dados', (req, res) => {
    res.send(usuarios);
})

// Iniciando o Servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


