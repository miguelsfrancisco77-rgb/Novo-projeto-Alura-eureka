function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let sorteados = [];
    let numeros;
    for (let i = 0; i < quantidade; i++) {
        numeros = obterNumeroAleatorio(de, ate);
        if (sorteados.includes(numeros)) {
            return sortear();
        } else {
            sorteados.push(numeros);
        }
    }
    resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
}
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
