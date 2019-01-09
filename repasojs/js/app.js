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
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona['edad']);