const camppedido=document.getElementById('pedido');
const campcliente=document.getElementById('cliente');
const camptelefono=document.getElementById('telefono');
const formularioContacto=document.getElementById('form');
const cuerpotabla=document.getElementById('cuerpotabla');
const lista=[];



const guardarLocalStorage = () => {
    
};
const recuperarLocalStorage = () => {};


//! CREATE
const guardarlista = (datoscontacto) => {
    lista.push(datoscontacto);
    mostrarlista();
   // validamos si todo esta ok 
   // console.log(lista);
   
};
//!READ
const mostrarlista = () => {
console.log(lista);
    cuerpotabla.innerHTML=lista.reduce((acc,listas,index)=>{
return acc+`
<tr>
      <th scope="row">${index+1}</th>
      <td>${listas.Pedido}</td>
      <td>${listas.Cliente}</td>
      <td>${listas.Telefono}</td>
      <td>
      <button type="submit" class="btn btn-warning"onclick="editarlista(${index})">editar</button>
      <button type="submit" class="btn btn-danger"onclick="eliminarlista(${index})">eliminar</button>
      </td>
    </tr>
`

    },'')
    
    
};

//! UPDATE
const editarlista = () => {};

//! DELETE
const eliminarlista = () => {};

//parte donde se colocara los datos para luego iniciar con el CRUD

formularioContacto.addEventListener('submit', (event) => {

    // ojo: cuando los campos estannvacios ,aparecera un alert diciendo que completes los datos
    event.preventDefault();
    
    if (!camppedido.value||!campcliente.value||!camptelefono.value) {
      alert('Esos datos no pueden estar vacios')
      return;
    }
    
    guardarlista({
        Pedido:camppedido.value,
        Cliente: campcliente.value,
        Telefono: camptelefono.value,

    });
    formularioContacto.reset();
});