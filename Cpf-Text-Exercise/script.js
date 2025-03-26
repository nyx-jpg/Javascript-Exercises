function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    let resultado = document.getElementById('cpfResultado');

    if (!cpf || cpf.length !== 11 || /^[0-9]{11}$/.test(cpf) === false) {
        resultado.textContent = 'CPF inválido.';
        return;
    }

    let soma = 0;
    let resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
        resultado.textContent = 'CPF inválido.';
        return;
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
        resultado.textContent = 'CPF inválido.';
        return;
    }

    const ufs = {
        '11': 'RO', '12': 'AC', '13': 'AM', '14': 'RR', '15': 'PA',
        '16': 'AP', '17': 'TO', '21': 'MA', '22': 'PI', '23': 'CE',
        '24': 'RN', '25': 'PB', '26': 'PE', '27': 'AL', '28': 'SE',
        '29': 'BA', '31': 'MG', '32': 'ES', '33': 'RJ', '41': 'SP',
        '42': 'PR', '43': 'SC', '44': 'RS', '45': 'MS', '46': 'MT',
        '47': 'GO', '51': 'DF', '52': 'MS', '53': 'MT', '54': 'GO',
    };

    const estado = ufs[cpf.substring(0, 2)] || 'UF desconhecida';
    resultado.textContent = `CPF válido. Estado: ${estado}`;
}

function formatarNegrito() {
    const texto = document.getElementById('editor');
    const selecionado = texto.value.substring(texto.selectionStart, texto.selectionEnd);
    texto.setRangeText(`**${selecionado}**`, texto.selectionStart, texto.selectionEnd, 'select');
}

function formatarItalico() {
    const texto = document.getElementById('editor');
    const selecionado = texto.value.substring(texto.selectionStart, texto.selectionEnd);
    texto.setRangeText(`*${selecionado}*`, texto.selectionStart, texto.selectionEnd, 'select');
}

function formatarSublinhado() {
    const texto = document.getElementById('editor');
    const selecionado = texto.value.substring(texto.selectionStart, texto.selectionEnd);
    texto.setRangeText(`__${selecionado}__`, texto.selectionStart, texto.selectionEnd, 'select');
}

function salvarConteudo() {
    const texto = document.getElementById('editor').value;
    localStorage.setItem('textoSalvo', texto);
    document.getElementById('editorFeedback').textContent = 'Texto salvo com sucesso!';
}

function carregarConteudo() {
    const textoSalvo = localStorage.getItem('textoSalvo');
    if (textoSalvo) {
        document.getElementById('editor').value = textoSalvo;
        document.getElementById('editorFeedback').textContent = 'Texto carregado com sucesso!';
    } else {
        document.getElementById('editorFeedback').textContent = 'Nenhum texto salvo encontrado.';
    }
}
