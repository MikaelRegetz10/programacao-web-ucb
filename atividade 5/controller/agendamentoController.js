const AgendamentoConsulta = require('../models/agendamentoConsultaModel');

function getIndexView(req, res){
    res.render('index.html');
}


function getAgendamentoView(req, res){
    AgendamentoConsulta.findAll().then((agendamentos)=>{
        res.render('agendamentos.html', {agendamentos});        
    })
}

function agendarConsulta(req, res){
    let form_invalido = false;
    let campos_invalidos = [];

    let dados_consulta = req.body;

    if(dados_consulta.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    if(campos_invalidos.length == 0){
        AgendamentoConsulta.create(dados_consulta).then(()=>{
            res.redirect('/agendamentos');
        });
    }
    else{
        res.render('index.html', {form_invalido, campos_invalidos, dados_consulta});
    }
}


module.exports = {
    getIndexView,
    agendarConsulta,
    getAgendamentoView
}