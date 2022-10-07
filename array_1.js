const mostrar = console.log;

let menos = [1, 4, 6];
let elemento = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let conjunto = [3, 2, 4, 5, 6, 3];
const nomes = ['swallow', 'berry', 'realize', 'single', 'weight'];
let primeiraLetra = texto => texto[0];
const letras = nomes.map(primeiraLetra)

mostrar(`Essas são as primeiras ${letras} desses ${nomes}.`)

mostrar(letras, nomes)
