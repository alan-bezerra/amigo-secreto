let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.querySelector("input").value.trim();

    if(novoAmigo == 0){
        alert("Por favor, insira um nome.");

    } else {
        if (amigos.includes(novoAmigo)) {
            alert("Este nome já foi adicionado!");
            return;

        } else {
        amigos.push(novoAmigo);
        limparCampo();
        exibirAmigos();
        }
    } 
}
function limparCampo(){
    let campo = document.querySelector("input");
    campo.value = "";
}
function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("Por favor, insira um nome.");
        return;
    }

    let sorteio = document.getElementById("resultado");
    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    let nome = amigos.splice(nomeSorteado, 1)[0];
    sorteio.innerHTML = "";

    let item = document.createElement("li");
    item.textContent = nome;

    sorteio.appendChild(item);

    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados!");
    }
}