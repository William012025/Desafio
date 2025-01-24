let amigos = [];


amigos = ['joao', 'maria'];
console.log(amigos);


function adicionarAmigo() {
    
   
    let incluirAmigo = document.querySelector('input').value;
    if (incluirAmigo.trim() === '' ){
        alert('Por favor, insira um nome.');
        return;
    }        
    
    amigos.push(incluirAmigo);
    console.log(amigos);
limparNome ();

}



console.log(amigos);


function limparNome() {
    incluirAmigo = document.querySelector('input');
    incluirAmigo.value = '';
    
}




function sortearAmigo() {
    console.log('o botão foi clicado');
}