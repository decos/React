INTRODUCCIÓN
===

## Visual Code y extensiones recomendadas

1. Bracket Pair Colorizer
    - Cuando abras llaves las coloree de diferentes colores

2. generate-react-component
    - Importar componentes

3. Live Server
    - (Importante en la primera parte del curso)

4. Pretier - Code formatter

5. Reactjs code snippets
    - Con poco codigo genera una estructura avanzada

6. Beautify

7. Bootstrap 4, Font Awesome ...

8. HTML Snippets

9. JavaScript (ES6)

10. React Component (Jeremy Rajan)

11. React Redux Snippets (Daniel Belf)


Introducción Javascript
===

## Variables con var

## Variables con let y const

## Scope en Javascript

## Template Strings en Javascript
Se comparo la antigua forma con la nueva forma

## Funciones y los distintos tipos de funciones
Diferencia entre function declaration y function expression, la primera no importa si la llamas antes de la funcion o despues, la otra solo despues.

## Funciones con parametros

## Arrow functions

## Objetos en Javascript - Objeto Literal

## Objetos en Javascript - Objeto Constructor
La ventaja es que puedes crear objetos de forma dinamica

## Prototypes
Nos va permitir atar ciertas funciones al un tipo de objeto y va ser que el codigo se vea mucho mas ordenado

## Object Destructuring
Extrayendo valores de un objeto

## Object Literal Enhacement
Poner valores en un objeto

## Funciones en un Objeto

## Arreglos, map y Object.keys
map: La idea de usar map es conservar el arreglo original y generar un nuevo arreglo

Object.keys: Obtener las llaves del arreglo

## Spread Operator

## .filter .find y .reduce y métodos para arreglos

## Promises
resolve: es el codigo que se ejecuta cuando se llama al Promise

reject: es el codigo que se ejecuta cuando ocurre un error

## Promises con Ajax

## Programación orientada a Objetos - Clases
Se dice que cuando pasas una funcion a una clase ya es un metodo

## Programación orientada a Objetos - Clases - Herencia

## Exportar variables hacia otro archivo

## Exportar funciones hacia otros modulos

## Exportando clases en modulos

## Exportando clases que heredan de otras

Instalando NodeJS, NPM y create-react-app
===

## Instalar NodeJS y NPM

1. Instalar NodeJS
    
        # node -v

2. Instalar NPM
    
        # npm -v

## ¿Que es Create React App? 

- Es una herramienta desarrollada por Facebook
- Es una forma sencilla de comenzar de crear proyectos en React
- Te evita tener que configurar webpack y babel
- Requiere NodeJS con NPM (forma más común de instalar paquetes) para instalarse
- Se puede instalar con Yarn (es una alternativa de NPM, desarrollada por Google y otras empresas)
- Instalando 'Create React App' se evita la configuracion de Webpack y Babel

### WEBPACK

        - Es un bundler(paquete) es decir crea paquetes de modulos para aplicaciones JavaScript modernas
        - Lo que haces es procesar la aplicación, mapea todas las dependencias de un módulo, con esto crea uno varios paquetes(bundlers)
        - Identifica los distintos tipos de archivos (.png, .jpg, .js, .ts, .sass), todas las procesa Webpack y nos da una salida la cual viene ser nuestro bundler(paquete), con todas las dependencias bien identificadas.
        - Permite transpilar el codigo de JavaScript Moderno a versiones anteriores de JavaScript para mayor compatibilidad con Babel.

## Instalando create-react-app

