function calcularLetraNIF() {
    // Obtener el número del input
    const numero = document.getElementById("nif").value;
    
    // Validar que sea un número de 8 dígitos
    if (!/^\d{8}$/.test(numero)) {
        alert("Por favor, introduce exactamente 8 dígitos numéricos");
        return;
    }
    
    // Calcular la letra
    const letra = obtenerLetraNIF(numero);
    
    // Mostrar el resultado
    mostrarNIF(numero, letra);
}

function obtenerLetraNIF(numero) {
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const resto = numero % 23;
    return letras[resto];
}

function mostrarNIF(numero, letra) {
    document.getElementById("resultado").textContent = 
        `Tu NIF completo es: ${numero}-${letra}`;
}

