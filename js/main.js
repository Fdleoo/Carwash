/* //programa de conteo de autos para un lavadero y su organizacion posterior



//variables constantes funciones clases
class Auto {
    constructor(dueño, marca, modelo, color, precio) {
        this.dueño = dueño
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.precio = precio
    }
    //metodo
    mostrarinfo(){
        console.log(`Dueño del Auto: ${this.dueño}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Color: ${this.color}`)
        if(this.precio == 'bajo'){
            console.log(`como su precio es: ${this.precio} el lavado costara $5,50`)
        }
        else if(this.precio == 'medio'){
            console.log(`como su precio es: ${this.precio} el lavado costara $20,75`)
        }
        else{
            console.log(`como su precio es: ${this.precio} el lavado costara $60,50`)
        }
        console.log('============================================================')
    }
}
class Camioneta {
    constructor(dueño, marca, modelo, color, precio) {
        this.dueño = dueño;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }
//metodo
    mostrarinfo(){
        console.log(`Dueño de la camioneta: ${this.dueño}`)
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Color: ${this.color}`)
        if(this.precio == 'bajo'){
            console.log(`como su precio es: ${this.precio} el lavado costara $30,50`)
        }
        else if(this.precio == 'medio'){
            console.log(`como su precio es: ${this.precio} el lavado costara $70,75`)
        }
        else{
            console.log(`como su precio es: ${this.precio} el lavado costara $100,50`)
        }
        console.log('============================================================')
    }
}

let arrayAuto = []
let arrayCamioneta = []
let vehiculosDelDia = prompt('Ingrese en numerico todos los vehiculos que ingresaron hoy al lavadero: ' )


if (isNaN(vehiculosDelDia)) {
    while (true) {
        vehiculos = prompt('Porfavor ingrese en numerico los vehiculos que ingresaron al lavadero: ')
        if (!isNaN(vehiculosDelDia)) {
            console.log('Se ingresaron exitosamente ', vehiculos, ' vehiculos')
            break
        }
        else {
            vehiculos = prompt('Porfavor ingrese en numerico los vehiculos que ingresaron al lavadero: ')
        }
        if (!isNaN(vehiculosDelDia)) {
            console.log('Se ingresaron exitosamente ', vehiculos, ' vehiculos')
            break
        }
    }
}


//procesos
alert('ingrese por cada vehiculo los siguientes datos')
//bucle creador de obj
for (i = 0; i < vehiculosDelDia; i++) {
    //pregunta class del obj
    let pregunta = prompt('es una camioneta o un auto: ').toLowerCase()
    if ((pregunta != 'auto') && (pregunta != 'camioneta')) {
        while (true) {
            pregunta = prompt('porfavor elija camioneta/auto: ').toLowerCase()
            if ((pregunta == 'auto') || (pregunta == 'camioneta')) {
                console.log('respuesta guardada con exito')
                break
            }
        }
    }
    //creacion del obj
    if (pregunta == 'auto'){
        //Prop del
        let dueño = prompt('Introduce el nombre del dueño del auto: ')
        let marca = prompt('Introduce la marca del auto: ')
        let modelo = prompt('Introduce el modelo del auto: ')
        let color = prompt('Introduce el color del auto: ')
        let precio = prompt('Introduce el precio del auto bajo/medio/alto: ').toLowerCase()
        if((precio != 'bajo') && (precio != 'medio') && (precio != 'alto')){
            while (true){
                precio = prompt('Porfavor elija un valor entre bajo/medio/alto con esos terminos: ')
                if((precio == 'bajo') || (precio == 'medio') || (precio == 'alto')){
                    break
                }
            }
        }
        //guardar en el array
        let nuevoAuto = new Auto(dueño, marca, modelo, color, precio)
        arrayAuto.push(nuevoAuto)
    }
    else if(pregunta == 'camioneta'){
                //Prop del
                let dueño = prompt('Introduce el nombre de la camioneta: ')
                let marca = prompt('Introduce la marca de la camioneta: ')
                let modelo = prompt('Introduce el modelo de la camioneta: ')
                let color = prompt('Introduce el color de la camioneta: ')
                let precio = prompt('Introduce el precio de la camioneta bajo/medio/alto: ').toLowerCase()
                if((precio != 'bajo') && (precio != 'medio') && (precio != 'alto')){
                    while (true){
                        precio = prompt('Porfavor elija un valor entre bajo/medio/alto con esos terminos: ')
                        if((precio == 'bajo') || (precio == 'medio') || (precio == 'alto')){
                            break
                        }
                    }
                }
                //guardar en el array
                let nuevaCamio = new Camioneta(dueño, marca, modelo, color, precio)
                arrayCamioneta.push(nuevaCamio)
    }
}

//salida
console.log('==================AUTOS==================')
for (i = 0; i < arrayAuto.length; i++){
    arrayAuto[i].mostrarinfo()
}
console.log('==================CAMIONETAS==================')
for (i = 0; i < arrayCamioneta.length; i++){
    arrayCamioneta[i].mostrarinfo()
} */
class Auto {
    constructor(dueño, marca, modelo, color, precio) {
        this.dueño = dueño;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }
    
    // Método
    mostrarinfo() {
        let info = `Dueño del Auto: ${this.dueño}\nMarca: ${this.marca}\nModelo: ${this.modelo}\nColor: ${this.color}\n`;
        if (this.precio === 'bajo') {
            info += `Como su precio es: ${this.precio} el lavado costará $5,50\n`;
        } else if (this.precio === 'medio') {
            info += `Como su precio es: ${this.precio} el lavado costará $20,75\n`;
        } else {
            info += `Como su precio es: ${this.precio} el lavado costará $60,50\n`;
        }
        info += '============================================================\n';
        return info;
    }
}

class Camioneta {
    constructor(dueño, marca, modelo, color, precio) {
        this.dueño = dueño;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.precio = precio;
    }

    // Método
    mostrarinfo() {
        let info = `Dueño de la camioneta: ${this.dueño}\nMarca: ${this.marca}\nModelo: ${this.modelo}\nColor: ${this.color}\n`;
        if (this.precio === 'bajo') {
            info += `Como su precio es: ${this.precio} el lavado costará $30,50\n`;
        } else if (this.precio === 'medio') {
            info += `Como su precio es: ${this.precio} el lavado costará $70,75\n`;
        } else {
            info += `Como su precio es: ${this.precio} el lavado costará $100,50\n`;
        }
        info += '============================================================\n';
        return info;
    }
}

let arrayAuto = [];
let arrayCamioneta = [];
let vehiculosDelDia = prompt('Ingrese en numérico todos los vehículos que ingresaron hoy al lavadero: ');

if (isNaN(vehiculosDelDia)) {
    while (true) {
        vehiculosDelDia = prompt('Por favor, ingrese en numérico los vehículos que ingresaron al lavadero: ');
        if (!isNaN(vehiculosDelDia)) {
            break;
        }
    }
}

// Procesos
// Bucle creador de obj
for (let i = 0; i < vehiculosDelDia; i++) {
    // Pregunta clase del obj
    let pregunta = prompt('¿Es una camioneta o un auto?').toLowerCase();
    if (pregunta !== 'auto' && pregunta !== 'camioneta') {
        while (true) {
            pregunta = prompt('Por favor, elija camioneta/auto: ').toLowerCase();
            if (pregunta === 'auto' || pregunta === 'camioneta') {
                break;
            }
        }
    }
    
    // Creación del obj
    if (pregunta === 'auto') {
        let dueño = prompt('Introduce el nombre del dueño del auto: ');
        let marca = prompt('Introduce la marca del auto: ');
        let modelo = prompt('Introduce el modelo del auto: ');
        let color = prompt('Introduce el color del auto: ');
        let precio = prompt('Introduce el precio del auto (bajo/medio/alto): ').toLowerCase();
        if (precio !== 'bajo' && precio !== 'medio' && precio !== 'alto') {
            while (true) {
                precio = prompt('Por favor, elija un valor entre bajo/medio/alto con esos términos: ');
                if (precio === 'bajo' || precio === 'medio' || precio === 'alto') {
                    break;
                }
            }
        }
        // Guardar en el array
        let nuevoAuto = new Auto(dueño, marca, modelo, color, precio);
        arrayAuto.push(nuevoAuto);
    } else if (pregunta === 'camioneta') {
        let dueño = prompt('Introduce el nombre del dueño de la camioneta: ');
        let marca = prompt('Introduce la marca de la camioneta: ');
        let modelo = prompt('Introduce el modelo de la camioneta: ');
        let color = prompt('Introduce el color de la camioneta: ');
        let precio = prompt('Introduce el precio de la camioneta (bajo/medio/alto): ').toLowerCase();
        if (precio !== 'bajo' && precio !== 'medio' && precio !== 'alto') {
            while (true) {
                precio = prompt('Por favor, elija un valor entre bajo/medio/alto con esos términos: ');
                if (precio === 'bajo' || precio === 'medio' || precio === 'alto') {
                    break;
                }
            }
        }
        // Guardar en el array
        let nuevaCamio = new Camioneta(dueño, marca, modelo, color, precio);
        arrayCamioneta.push(nuevaCamio);
    }
}

// Salida
let infoAutos = '==================AUTOS==================\n';
for (let i = 0; i < arrayAuto.length; i++) {
    infoAutos += arrayAuto[i].mostrarinfo();
}

let infoCamionetas = '==================CAMIONETAS==================\n';
for (let i = 0; i < arrayCamioneta.length; i++) {
    infoCamionetas += arrayCamioneta[i].mostrarinfo();
}