function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if(tipoDeIngresso.value == 'pista'){
        comprarIngresso('qtd-pista', quantidade);
    } else if (tipoDeIngresso.value == 'superior'){
        comprarIngresso('qtd-superior', quantidade);
    } else {
        comprarIngresso('qtd-inferior', quantidade);
    }
} 

function comprarIngresso(idDoIngresso, quantidade){
    let ingresso = document.getElementById(idDoIngresso);
    verificacaoDeDisponibilidade(quantidade, ingresso)
}


function verificacaoDeDisponibilidade(quantidade, quantidadeDoTipoDeIngresso){
    let disponivel = parseInt(quantidadeDoTipoDeIngresso.textContent);

    if(quantidade > disponivel){
        alert('Quantidade indisponível para o tipo selecionado')
    } else {
        let novaQuantidade = disponivel - quantidade;
        quantidadeDoTipoDeIngresso.textContent = novaQuantidade;
        alert('Compra realizada com sucesso!!!');
    }
}

