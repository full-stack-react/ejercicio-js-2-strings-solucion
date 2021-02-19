const fraseSnakeCase = "ves_amb_compte_amb_el_que_rapejes_que_pots_acabar_a_la_preso";

const palabras = fraseSnakeCase.split("_");

/* Método 1 */
for (let i = 1; i < palabras.length; i++) {
  const palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
  palabras[i] = palabraModificada;
}

console.log(palabras.join(""));

/* Método 2 */
let fraseCamelCase = "";

for (let i in palabras) {
  const palabra = palabras[i];
  if (i > 0) {
    fraseCamelCase += palabra.charAt(0).toUpperCase() + palabra.slice(1);
  } else {
    fraseCamelCase += palabra;
  }
}

/* Método 3 */
const palabras = fraseSnakeCase.split("_");
let palabrasFinal = [];

for (let i in palabras) {
  const palabra = palabras[i];
  if (i > 0) {
    palabrasFinal.push(palabra.charAt(0).toUpperCase() + palabra.slice(1));
  } else {
    palabrasFinal.push(palabra);
  }
}

const fraseCamelCase = palabrasFinal.join("");

console.log(fraseCamelCase);
