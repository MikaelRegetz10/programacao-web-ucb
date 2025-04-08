const express = require('express');
const estoque = require('./estoque');
const app = express();


app.get('/', (req, res)=> {
    res.send('<h1>app_estoque</h1>');
})

app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    let item = {
        id: Number(req.params.id),
        nome: req.params.nome,
        qtd: Number(req.params.qtd)
    };
    res.send(estoque.adicionar(item));
})

app.get('/listar', (req, res)=>{
    res.send(estoque.listar());
});

app.get('/editar/:id/:qtd', (req, res)=>{
    let id = Number(req.params.id);
    let qtd = Number(req.params.qtd);
    res.send(estoque.editar(id, qtd))
})

const PORT = 8080;
app.listen(PORT, ()=> 
    console.log("app rodando na porta " + PORT)
);