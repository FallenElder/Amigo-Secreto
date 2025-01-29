let amigos = [];

function adicionarAmigo(){
    let entradaAmigo = document.getElementById('amigo').value;
    
    if (entradaAmigo !== ''){
        amigos.push(entradaAmigo);
        document.getElementById('amigo').value = '';
        listaAmigos()
    }
    else{
        alert("Por favor, insira um nome.");
    }
}

function listaAmigos(){
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    let newLi;
    for (let i = 0; i < amigos.length; i++){
        newLi = document.createElement('li');
        lista.appendChild(newLi);
        newLi.appendChild(document.createTextNode(amigos[i]));
    }
} 