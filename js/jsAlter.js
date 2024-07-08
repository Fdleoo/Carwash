//inicio y redireccion
let form_inicio = document.querySelector('.inicio_form')
let num_inicio = 'x'
sessionStorage.setItem('vehiculos', 'hola')

form_inicio.addEventListener('submit', (e)=>{
    e.preventDefault()

    num_inicio = document.getElementById('inicio_submit').value;
    sessionStorage.setItem('vehiculos', num_inicio)
    
    // Verifica el valor inmediatamente después de almacenarlo
    let vehiculos_dia = sessionStorage.getItem('vehiculos')

    // Convierte vehiculos_dia a número para la comparación
    vehiculos_dia = Number(vehiculos_dia);

    if ((vehiculos_dia >= 0) && (vehiculos_dia <= 100)){
        document.location.href = 'index.html'
    } else {
        alert('Por favor ingrese los vehiculos del dia expresados en numeros')
    }
})

