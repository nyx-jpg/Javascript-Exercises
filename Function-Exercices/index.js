function converterCelsiusParaFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('resultadoCelsius').textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('resultadoCelsius').textContent = 'Valor inválido';
    }
}

function converterFahrenheitParaCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('resultadoFahrenheit').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('resultadoFahrenheit').textContent = 'Valor inválido';
    }
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = peso / (altura * altura);
        document.getElementById('imcResult').textContent = `IMC: ${imc.toFixed(2)}`;
        document.getElementById('imcClassificacao').textContent = obterClassificacaoIMC(imc);
    } else {
        document.getElementById('imcResult').textContent = '';
        document.getElementById('imcClassificacao').textContent = 'Dados inválidos';
    }
}

function obterClassificacaoIMC(imc) {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    if (imc < 39.9) return 'Obesidade I';
    return 'Obesidade II';
}

function gerarNumerosAleatorios() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const numeros = [];
    while (numeros.length < quantidade) {
        const num = Math.floor(Math.random() * 100) + 1;
        if (!numeros.includes(num)) numeros.push(num);
    }
    document.getElementById('numerosAleatorios').textContent = `Números gerados: ${numeros.join(', ')}`;
}

function validarSenha() {
    const senha = document.getElementById('senha').value;
    let mensagem = '';
    if (senha.length < 8) mensagem += 'A senha deve ter no mínimo 8 caracteres. ';
    if (!/[A-Z]/.test(senha)) mensagem += 'A senha deve conter pelo menos uma letra maiúscula. ';
    if (!/\d/.test(senha)) mensagem += 'A senha deve conter pelo menos um número. ';
    document.getElementById('senhaFeedback').textContent = mensagem || 'Senha válida';
}
