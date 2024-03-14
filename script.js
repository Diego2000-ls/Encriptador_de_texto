const formulario = document.getElementById('formulario');
const textoInput = document.getElementById('texto');
const resultadoInput = document.getElementById('resultado');
const copiarBoton = document.getElementById('copiar');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const accion = document.querySelector('input[name="accion"]:checked').value;
    const texto = textoInput.value.toLowerCase();

    let resultado;

    if (accion === 'encriptar') {
        resultado = encriptar(texto);
    } else {
        resultado = desencriptar(texto);
    }

    resultadoInput.value = resultado;
});

copiarBoton.addEventListener('click', () => {
    resultadoInput.select();
    document.execCommand('copy');
});

function encriptar(texto) {
    return texto.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
    return texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
