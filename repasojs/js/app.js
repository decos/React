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