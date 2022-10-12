import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
// import { db } from "../services/firebase.js";

//Guardar cliente en firestore
export const saveClient = (nombre, apellido, domicilio, telefono, correo) =>
    console.log(nombre, apellido, domicilio, telefono, correo)
    // addDoc(collection(db, 'clientes'), {nombre, apellido, domicilio, telefono, correo})

//Listar datos de clientes
export const getClients = () => console.log("lista de clientes")

//Eliminar cliente en firestore
