let amigos = [];


//amigos = ['mae', 'maria'];
//console.log(amigos);


function adicionarAmigo() {


    let incluirAmigo = document.querySelector('input').value;
       if (incluirAmigo.trim() === '' ){
        alert('Por favor, insira um nome.');
        return;
    }        


    if (amigos.includes(incluirAmigo)) {
        alert('Este amigo(a) já está na lista!');
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
    
}

    
    function sortearAmigo()
     {
        let resultado = document.querySelector("#resultado");
    
      
        if (amigos.length === 0) {
            resultado.innerHTML = '<li>Não há amigos disponíveis para sortear, gentiliza incluir!.</li>';
            return;
        }
    
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    
        // Obtém o nome sorteado
        let amigoSorteado = amigos[amigoAleatorio];
        resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

        
      
    }

function limparNome() {
    document.querySelector('input').value = '';
}
