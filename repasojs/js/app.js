// Crear variables

// Variables con VAR

/* var aprendiendo = 'Javascript';
console.log(aprendiendo); */

// Variables CONST

/* const aprendiendo02 = 'Javascript';
console.log(aprendiendo02); */

// Variables LET

/* let aprendiendo03 = 'Javascript';
aprendiendo03 = true;
console.log(aprendiendo03);
 */
// Scope

/* var musica = 'Rock';

if(musica){
    var musica = 'Grunge';
    console.log('Dentro del IF: ', musica);
}
console.log('Fuera del IF: ', musica); */

// Scope con LET

/* let musica = 'Rock';

if(musica){
    let musica = 'Grunge';
    console.log('Dentro del IF: ', musica);
}
console.log('Fuera del IF: ', musica); */

// Scope con CONST

/* const musica = 'Rock';

if(musica){
    const musica = 'Grunge';
    console.log('Dentro del IF: ', musica);
}
console.log('Fuera del IF: ', musica); */

// Template Strings

/* const nombre = 'Diego';
const trabajo = 'Desarrollador Web';  */

// concatenar javascript (old version)
/* console.log('Nombre: ' +  nombre + ', Trabajo: ' + trabajo); */

// concatenar javascript (new version)
/* console.log(`Nombre: ${nombre} , Trabajo: ${trabajo}`); */

// concantenar con multiples lineas (old version)
/* const contenedorApp = document.querySelector('#app');
let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';
contenedorApp.innerHTML = html; */

// concantenar con multiples lineas (new version)
/* const contenedorApp = document.querySelector('#app');

let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp.innerHTML = html; */

// creando una funcion

// Function Declaration
/* function saludar( nombre ){
    console.log('Bienvenido ' + nombre);
}

saludar('Diego');
saludar('Carlos');
saludar('Kevin'); */

// Function Expression
/* const cliente =  function(nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Juan'); */

// parametros por default en las funciones

/* function actividad(nombre = 'Walter White', actividad = 'Enseñar Quimica'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprender Javascript');
actividad('Pedro', 'Creando un sitio web');
actividad();
 */

/* const actividad = function(nombre = 'Walter White', actividad = 'Enseñar Quimica'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprender Javascript');
actividad('Pedro', 'Creando un sitio web');
actividad(); */

// array functions

// (old version)
/* let viajando = function(destino){
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje;
viaje = viajando('Paris');

console.log(viaje); */

// si le pasas un parametro (new version)
/* let viajando = destino => {
    return `Viajando a la ciudad de: ${destino}`;
}

let viaje;
viaje = viajando('Barcelona');

console.log(viaje); */

// si le pasas mas de un parametro
/* let viajando = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino} por ${duracion}`;
}

let viaje;
viaje = viajando('Barcelona', '9 dias');

console.log(viaje); */

// si retornas un solo valor
/* let viajando = destino => `Viajando a la ciudad de: ${destino}`;

let viaje;
viaje = viajando('Lima');

console.log(viaje); */

// Objetos

// Object Literal
/* const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona['edad']); */

// Object Constructor
/* function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
} */

// crear una nueva tarea
/* const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
const tarea2 = new Tarea('Preparar café', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('Conocer a mis suegros', 'Baja');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4); */

// Prototype
/* function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
} */ 

// Agregar un prototype a tarea
/* Tarea.prototype.mostrarInformacionTarea =  function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
const tarea1 = new Tarea('Pasear al perro', 'Media');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
console.log(tarea2);
console.log(tarea2.mostrarInformacionTarea()); */

// Destructuring de objetos

/* const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}
console.log(aprendiendoJS); */

// Destructuring: es extraer valores de un objeto

// version anterior
/* let version = aprendiendoJS.version.nueva;
console.log(version);
let framework = aprendiendoJS.frameworks[1];
console.log(framework); */

// version nueva
/* let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks); */

/* let {nueva} = aprendiendoJS.version;
console.log(nueva); */

// Object Literal Enhacement

/* const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];
 */
// forma anterior

/* const metallica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metallica); */

// forma nueva
/* const metallica = { banda, genero, canciones};
console.log(metallica); */

// Metodos y funciones de un objeto

/* const persona = {
    nombre: 'Juan',
    trabajo: 'Desarrollador Web',
    edad: 27,
    musicaRock: true,
    mostrarInformacion: function() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)
    }
}

persona.mostrarInformacion(); */

// Arreglos y .map

/* const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito); */

// primera forma
/* const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach( producto => {
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML = html; */

// segunda forma (MAP)

/* const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
console.log(carrito);

carrito.map(producto => {
    return 'El producto es ' + producto;
}) */

// Object.keys

/* const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}

console.log(Object.keys(persona)); */

// Spread operator

/* let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django']; */

// unir los arreglos en uno solo

/* let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion); */

// ejemplo 2

/* let lenguajes = ['JavaScript', 'PHP', 'Python'];

let [ultimo] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo); */

// ejemplo 3

/* function suma(a, b, c){
    console.log(a + b + c);
}

const numeros = [1,2,3];

suma(...numeros); */

// Métodos en arreglos

/* const personas = [
    {nombre: 'Juan', edad: 23, aprendiendo: 'JavaScript'},
    {nombre: 'Pablo', edad: 18, aprendiendo: 'PHP'},
    {nombre: 'Alejandra', edad: 21, aprendiendo: 'AdobeXD'},
    {nombre: 'Karen', edad: 30, aprendiendo: 'Python'},
    {nombre: 'Miguel', edad: 35, aprendiendo: 'ReactJS'},
]

console.log(personas);

// filtrar > 28 años
const mayores = personas.filter(persona => {
    return persona.edad > 28
});
console.log(mayores);

// que aprende alejandra y su edad
const alejandra  = personas.find(persona => {
    return persona.nombre === 'Alejandra';
});
console.log('Alejandra esta aprendiendo: ' + alejandra.aprendiendo);

// usar reduce, hallar el total de las edades de las personas

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad
}, 0); // donde 0 es el valor inicial de edadTotal

console.log(total/personas.length); */

// Promises

/* const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout( () => {
        let descuento = false; 

        if(descuento){
            resolve('Descuento aplicado!');
        } else{
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then( resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})
 */

// Promises con Ajax

/* const descargarUsuarios = cantidad => new Promise( (resolve, reject) => {
    // pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a ajax
    const xhr = new XMLHttpRequest();

    // abrir la conexion
    // GET o POST, la API, si es asincrono o no
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200){
            // Convertir un String a un Objeto de JavaScript
            resolve( JSON.parse(xhr.responseText).results);
        } else {
            reject( Error(xhr.statusText) );
        }
    }

    // opcional (on error)
    xhr.onerror = (error) => reject(error);

    // send
    xhr.send();
} );

descargarUsuarios(5).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un error: ' + error)
    )
)

function imprimirHTML(usuarios){
    let html = '';
    usuarios.forEach(usuario => {
        console.log(usuario);

        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                País: ${usuario.nat}
                Imagen:
                    <img src="${usuario.picture.medium}">
            </li>
        `;
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
} */

// POO - Escribir clases

class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        //return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }

    hola() {
        return "hola";
    }
}

// crear los objetos
let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Preparar café', 'Media');
let tarea3 = new Tarea('Pasear al perro', 'Alta');
let tarea4 = new Tarea('Conocer el mundo', 'Baja');

/* console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar()); */

// Compras

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
compra1.mostrar();
console.log(compra1.hola());