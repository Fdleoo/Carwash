//inicio y redireccion
let form_inicio = document.querySelector('.inicio_form')
let num_inicio = 'x'

form_inicio.addEventListener('submit', (e)=>{
    e.preventDefault()

    nom_inicio = document.getElementById('inicio_submit').value;
    sessionStorage.setItem('nombre', nom_inicio)
    
    // Verifica el valor inmediatamente después de almacenarlo
    let nombre_gerente = sessionStorage.getItem('nombre')


    if (isNaN(nombre_gerente)){
        document.location.href = 'index.html'
    } else {
        alert('Por favor ingrese los vehiculos del dia expresados en numeros')
    }
})
let x = sessionStorage.getItem('nombre')
console.log(x)
