// Abrir el registro de nuevo elemento
const abrirModal = document.getElementById('abrirRegistroModal')
// Almacenar elemento del modal. (contenido del elemento de la tabla)
const modal = document.getElementById('modal')
// Cerrar registro
const cerrarModal = document.getElementById('cerrarRegistroModal')


const mostrarRegistroModal = () => {
    modal.classList.toggle('is-active')        //Es como el interruptor de una luz. Es un valor booleano
}

abrirModal.addEventListener('click', mostrarRegistroModal)              // Abrir tarjeta de registro
cerrarModal.addEventListener('click', mostrarRegistroModal)             // Cerrar tarjeta de registro