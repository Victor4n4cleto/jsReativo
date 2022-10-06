const mostrar = console.log;

// arrow function 

const um = () => mostrar('Olá')
um();

const diga = (nome) => { return `Fala ${nome} !!!` }

mostrar(diga('Maria'))

const somar = (...numeros) => {
    mostrar(typeof numeros)
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

mostrar(somar(1, 2, 3))

const potencia = (base) => {
    return  (exp) => {
        return Math.pow(base, exp)
    }
}
mostrar(potencia(2)(8))