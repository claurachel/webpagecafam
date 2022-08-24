// Lista de almacen de datos
let contactos = []

// Funcion de captura de datos del formulario
function insertarDatos(){

    // Toman los datos de los campos de texto
    let nombre = document.querySelector("#nombre").value
    let apellido = document.querySelector("#apellido").value
    let email = document.querySelector("#correo").value

    // Elaboro un objeto con los datos obtenidos del formulario
    let contacto = {'nombre': nombre, 'apellido': apellido, 'email': email}

    // Inserto el objeto en la lista
    contactos.push(contacto)
}


// Crear la tabla con los datos de la lista
function crearTabla(contactos) {

    //Reiniciar la tabla con los titulos
    let tabla = document.getElementById("tabla")
    tabla.innerHTML = `
    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>Correo</td>
                    </tr>
    `

    // Renderizo cada contacto de la lista en la tabla
    contactos.forEach(element => {
        console.log(element);

    // Repite el ciclo por cada elemento de la lista
    let fila = `
    
    <tr>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.email}</td>
    </tr>

    
    `
    //Inserta la fila al final de la tabla
    tabla.insertAdjacentHTML("beforeend", fila)
});
    


}

let botonFormulario = document.querySelector("#boton")

// Evento que se ejecuta cada vez que se haga un click
botonFormulario.addEventListener("click", function(){
    console.log("Estoy haciendo click")
    insertarDatos()
    crearTabla(contactos)
})