const empleados = [
    {
        id: 1,
        nombre: 'Tomas'
    },
    {
        id: 2,
        nombre: 'Facundo'
    },
    {
        id: 3,
        nombre: 'Roberto'
    },
    {
        id: 4,
        nombre: 'El pete de tute'
    }



]

const salarios = [
    {
        id: 1,
        salario: 1500
    },
    {
        id: 2,
        salario: 2500
    },
    {
        id: 3,
        salario: 1800
    }

]

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`El empleado con ID: "${id}", no existe`)
        }

    });

    return promesa;

}

const getSalario = (id) => {
    
    return new Promise ((resolve, reject) => {

        const salario = salarios.find(e => e.id === id)?.salario;

        (salario)
        ? resolve (salario)
        : reject(`El salario con ID: "${id}", no existe`);


    });
}

const id = 5

//getEmpleado(id)
//.then( empleado => console.log (empleado) ) 
//.catch (err => console.log (err));


//getSalario(id)
//.then( salario => console.log (salario) ) 
//.catch (err => console.log (err));


let nombre;

getEmpleado (id)
.then (empleado =>{
    nombre = empleado
    return getSalario(id)
})
.then (salario => console.log (`El empleado: ${nombre}, tiene un salario de: $${salario}`))
.catch (err => console.log (err));