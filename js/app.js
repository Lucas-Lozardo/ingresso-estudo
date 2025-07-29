function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    if(tipoDeIngresso.value == 'pista'){
        comprarPista(quantidade);
    } else if (tipoDeIngresso.value == 'superior'){
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }

 
} 

function comprarPista(quantidade){
    let quantidadePista = document.getElementById('qtd-pista');
    verificacaoDeDisponibilidade(quantidade, quantidadePista)
}

function comprarSuperior(quantidade){
    let quantidadeSuperior =  document.getElementById('qtd-superior');
    verificacaoDeDisponibilidade(quantidade, quantidadeSuperior);
}

function comprarInferior(quantidade){
    let quantidadeInferior =  document.getElementById('qtd-inferior');
    verificacaoDeDisponibilidade(quantidade, quantidadeInferior)
    
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

