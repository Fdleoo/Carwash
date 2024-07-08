let biblioteca = document.querySelector(".biblioteca");

let nuevoCarro = {};

let tipo = [];
let dueno = [];
let patente = [];
let color = [];

let datos = [tipo, dueno, patente, color];
let formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener valores del formulario
    tipo = document.getElementById('tipo').value;
    dueno = document.getElementById('dueno').value;
    patente = document.getElementById('patente').value;
    color = document.getElementById('color').value;

    // Creación del elemento <article> y su contenido
    nuevoCarro = document.createElement('article');
    nuevoCarro.classList.add('articulo')
    nuevoCarro.innerHTML = `
        <h2>${tipo}</h2>
        <p>Dueño: ${dueno}</p>
        <p>Patente: ${patente}</p>
        <p>Color: ${color}</p>
    `;

    // Agregar nuevoCarro a la biblioteca
    biblioteca.appendChild(nuevoCarro);
    // Limpiar campos del formulario después de agregar
    formulario.reset();
});


//falta un bucle para solo crear las instancias puestas en el inicio