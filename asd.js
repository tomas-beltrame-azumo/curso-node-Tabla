const base = 4;

const multiplicar = (base) => {

    return new Promise ((resolve, reject) => {
    let salida = '';

    for (let i = 1; i < 11; i++) {
        salida += `${base} x ${i} es igual a: ${base * i}\n`;

    }
    resolve (salida);
});
}


    console.log(multiplicar(base))
