let amigos = [];

function adicionarAmigo(){
    let entradaAmigo = document.getElementById('amigo').value;
    
    if (entradaAmigo !== ''){
        amigos.push(entradaAmigo);
        document.getElementById('amigo').value = '';
    }
    else{
        alert("Por favor, insira um nome.");
    }
}