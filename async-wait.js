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

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`El empleado con ID: "${id}", no existe`)


    });


}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(e => e.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`El salario con ID: "${id}", no existe`);


    });
}

const getInfoUsuario = async (id) => {

    try {

        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El empleado: ${empleado}, tiene un salario de: $${salario}`;
    }
    catch (error) {
        throw error;
    }
}


const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

