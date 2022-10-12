import { saveClient, getClients } from "./context/firestoreContext.js";

window.addEventListener('DOMContentLoaded', () => {
    getClients()
})

// Abrir el registro de nuevo elemento
const abrirModal = document.getElementById('abrirRegistroModal')
// Almacenar elemento del modal. (contenido del elemento de la tabla)
const modal = document.getElementById('modal')
// Cerrar registro
const cerrarModal = document.getElementById('cerrarRegistroModal')
// Constante que contiene la referencia al formulario
const formularioRegistro = document.getElementById('formulario-registro')

const mostrarRegistroModal = () => {
    modal.classList.toggle('is-active')         //Es como el interruptor de una luz. Es un valor booleano
}

abrirModal.addEventListener('click', mostrarRegistroModal)              // Abrir tarjeta de registro
cerrarModal.addEventListener('click', mostrarRegistroModal)             // Cerrar tarjeta de registro

formularioRegistro.addEventListener('submit', (e) => {                  //Logica para el btnAgregar
    e.preventDefault()                                                  // Para que no recargue la pagina al darle a guardar datos

    const nombre = formularioRegistro['nombre']
    const apellido = formularioRegistro['apellido']
    const domicilio = formularioRegistro['domicilio']
    const telefono = formularioRegistro['telefono']
    const correo = formularioRegistro['correo']

    saveClient(nombre.value, apellido.value, domicilio.value, telefono.value, correo.value)
})