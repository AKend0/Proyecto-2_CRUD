const camppedido=document.getElementById('pedido');
const campcliente=document.getElementById('cliente');
const camptelefono=document.getElementById('telefono');
const formularioContacto=document.getElementById('form');
const guardarLocalStorage = () => {
    
};
const recuperarLocalStorage = () => {};


//! CREATE
const guardarContacto = () => {
    console.log();
};
//!READ
const mostrarContactos = () => {};

//! UPDATE
const editarContacto = () => {};

//! DELETE
const eliminarContacto = () => {};

formularioContacto.addEventListener('submit', (event) => {
    if (!camppedido.value||!campcliente.value||!camptelefono.value) {
      alert('Esos datos no pueden estar vacios')
      return;
    }
    event.preventDefault();
    console.log({
        pedido:camppedido.value,
        cliente: campcliente.value,
        telefono: camptelefono.value,

    });
    formularioContacto.reset();
});