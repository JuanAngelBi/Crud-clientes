import { saveClient } from "../context/firestoreContext.js";

export function btnAgregar() {
    
    formularioRegistro.addEventListener('submit', (e) => {                  // Logica para el btnAgregar
        e.preventDefault()                                                  // Para que no recargue la pagina al darle a guardar datos
    
        const nombre = formularioRegistro['nombre']
        const apellido = formularioRegistro['apellido']
        const domicilio = formularioRegistro['domicilio']
        const telefono = formularioRegistro['telefono']
        const correo = formularioRegistro['correo']
    
        saveClient(nombre.value, apellido.value, domicilio.value, telefono.value, correo.value)
    })

    return (
        <button class="button is-success">Guardar</button>
    )
}