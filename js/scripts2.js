const fraseCamelCase = "vesAmbCompteAmbProtestarAlCarrerQuePotsPerdreUnUll";
let fraseSnakeCase = "";

for (let i in fraseCamelCase) {
  const letra = fraseCamelCase[i];
  if (letra === letra.toUpperCase()) {
    fraseSnakeCase += "_" + letra.toLowerCase();
  } else {
    fraseSnakeCase += letra;
  }
}

console.log(fraseSnakeCase);
