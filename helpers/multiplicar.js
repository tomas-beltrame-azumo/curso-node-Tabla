const fs = require('fs')
const colors = require('colors');


const multiplicar = (base,hasta) => {

    return new Promise((resolve, reject) => {

        let objeto = {
            salida:'',
            consola:'',
            
        }
        const salida ='';
      

        for (let i = 1; i <= hasta; i++) {
            objeto.consola += `${base} ${'x'.red} ${i} ${'es igual a:'.red} ${base * i}\n`.blue;
            objeto.salida += `${base} x: ${i} es igual a: ${base * i}\n`;

        }  
        
        
        (objeto.salida)
            ? resolve(objeto)
            : reject('Error! :(');


    });
}



const crearArchivo = async (base,listar,hasta) => {

    try {
        let objeto = {
            salida:'asd',
            consola:'asd',
        }
        objeto = await multiplicar(base,hasta);
        if (listar){
            console.log(`-------------`.rainbow);
        console.log(`Tabla de ${base}`.green, `hasta: ${hasta}`.yellow);
        console.log(`------------`.rainbow);
        console.log(objeto.consola);
        }
       
        
        fs.writeFileSync(`./salida/tabla del ${base}.txt`, objeto.salida);
        return `tabla del ${base}.txt`;
    }
    catch (error) {
        return error;
    }

}


module.exports = {
    crearArchivo //objeto crear archivo [ crearArchivo:crearArchivo]
}