// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solución 1:");
console.log("///////////////");
console.log(calcularAreaRectangulo(10, 4)); 
console.log(calcularAreaRectangulo(6, 54)); 
console.log(calcularAreaRectangulo(15, 10)); 
console.log("///////////////");

// la fórmula del área de un rectángulo es longitud por ancho, así que solo necesitaba multiplicar esos dos valores. Hice una función para que reciba las dimensiones como parámetros y devuelva el resultado directamente.


function contarPalabras(cadena) {
    return cadena.trim().split(/\s+/).length;
}

console.log("Solución 2:");
console.log("///////////////");
console.log(contarPalabras("queremos Viajar!!")); 
console.log(contarPalabras("Necesito vacaciones")); 
console.log(contarPalabras("   me gusta  el  verano  ")); 
console.log("///////////////");

// Explicación del desarrollo: Acá pensé: "¿Cómo puedo separar las palabras de una frase?" Si las palabras están separadas por espacios, basta con dividir la cadena usando .split(). Para que no falle con espacios extra al principio o al final, usé .trim() primero. También me aseguré de contar cualquier cantidad de espacios entre palabras con una expresión regular.


function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("Solución 3:");
console.log("///////////////");
console.log(invertirCadena("chau")); 
console.log(invertirCadena("desarrollanding")); 
console.log(invertirCadena("12345")); 
console.log("///////////////");

// agregué .split("") convierte la cadena en un array de caracteres, y .reverse() lo invierte. Después, con .join(""), lo volví a juntar en una cadena


function esPalindromo(cadena) {
    const cadenaNormalizada = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cadenaNormalizada === cadenaNormalizada.split("").reverse().join("");
}

console.log("Solución 4:");
console.log("///////////////");
console.log(esPalindromo("neuquen")); 
console.log(esPalindromo("arroz")); 
console.log(esPalindromo("rallar")); 
console.log("///////////////");

// pensé cómo comparar una palabra consigo misma al revés. empecé limpiando la cadena para quitar espacios y convertir todo a minúsculas, porque "A" y "a" deberían ser iguales. Usé una expresión regular para eliminar todo lo que no sea una letra o número, invertí la cadena y la comparé con la original.


function edadCanina(edad) {
    const edadHumana = edad / 7;
    console.log(`Tu pichicho tiene ${edadHumana} años en años humanos.`);
}

console.log("Solución 5:");
console.log("///////////////");
console.log(edadCanina(7)); 
console.log(edadCanina(20)); 
console.log(edadCanina(49)); 
console.log("///////////////");

// la lógica fue dividir la edad del perro por 7,
//  porque ese es el promedio que se usa para comparar la edad de los perros con la humana.