let amigos = [];


amigos = ['mae', 'maria'];
//console.log(amigos);


function adicionarAmigo() {


    let incluirAmigo = document.querySelector('input').value;
       if (incluirAmigo.trim() === '' ){
        alert('Por favor, insira um nome.');
        return;
    }        
    
    amigos.push(incluirAmigo);
    listaComHTML();
    
    console.log(amigos);
    limparNome ();

}

console.log(amigos);


function listaComHTML() {

    let lista = document.querySelector("#listaAmigos");  // ser for por id colocar #listaAmigos
    lista.innerHTML = '';
    for (i = 0; i < amigos.length; i++) {
    
    let novoNaLista = document.createElement('li');
        novoNaLista.textContent = amigos[i];
        lista.appendChild(novoNaLista);
    }
    
    

    
/*
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement('li');
            li.textContent = amigos[i];
            lista.appendChild(li);
    }
    amigos.
}


/*function verificaListaAmigos() {
    let amigosNaLista = amigos.document.querySelector('input').value
    amigosNaLista.includes();
    return verificaListaAmigos();
    */
}




function limparNome() {
    document.querySelector('input').value = '';
}


function sortearAmigo() {
    console.log('o botão foi clicado');
}