const mostrar = console.log;

function bomDia() {
    mostrar('Bom dia !')
}

let boaTarde = function () {
    mostrar('Boa tarde !')
}

function executar(fn) {
    if(typeof fn == 'function') {
        fn()
    }
}

// retornando uma função a partir de outra:

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}
let bits8 = potencia(2, 8)
mostrar(bits8)

executar(3)
executar(bomDia)
executar(boaTarde)