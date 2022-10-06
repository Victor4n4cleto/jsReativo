const mostrar = console.log;

// Exemplos de declaração de função

// função declarativa
function bomDia() {
    mostrar('bmo dia !')
}
bomDia();
//

// Função expressiva

const boaTarde = function () {
    mostrar('Boa tarde !')
}
boaTarde();

function somar(a, b) {
    return a + b
}

let resultado = somar(4, 5)
mostrar(resultado)