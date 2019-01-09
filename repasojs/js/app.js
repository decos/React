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

const nombre = 'Diego';
const trabajo = 'Desarrollador Web'; 

// concatenar javascript (old version)
console.log('Nombre: ' +  nombre + ', Trabajo: ' + trabajo);

// concatenar javascript (new version)
console.log(`Nombre: ${nombre} , Trabajo: ${trabajo}`);

// concantenar con multiples lineas (old version)
/* const contenedorApp = document.querySelector('#app');
let html = '<ul>' + 
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';
contenedorApp.innerHTML = html; */

// concantenar con multiples lineas (new version)
const contenedorApp = document.querySelector('#app');

let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp.innerHTML = html;