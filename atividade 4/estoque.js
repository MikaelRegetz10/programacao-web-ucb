let itens = [];

function adicionar(item){
    itens.push(item)
    return true;
}

function listar(){
    return itens;
}

function editar(id, qnt){
    itens.forEach(itemCadastrado => {
        if(itemCadastrado.id == id){
            itemCadastrado.qnt = qnt;
        }
    });
    return true
}

module.exports = {
    adicionar, 
    listar,
    editar
}