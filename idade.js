function verificarIdade(idade) {
    return idade >= 18;
}

module.exports = verificarIdade;

function verificar() {
    const idade = Number(document.getElementById('idade').value);
    const resultado = document.getElementById('resultado');

    if (document.getElementById('idade').value === '' || idade < 0) {
        resultado.textContent = 'Digite uma idade válida!';
        resultado.className = 'menor';
        return;
    }

    if (verificarIdade(idade)) {
        resultado.textContent = 'Maior de idade';
        resultado.className = 'maior';
    } else {
        resultado.textContent = 'Menor de idade';
        resultado.className = 'menor';
    }
}