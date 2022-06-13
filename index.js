const camppedido=document.getElementById('pedido');
const campcliente=document.getElementById('cliente');
const camptelefono=document.getElementById('telefono');
const formularioContacto=document.getElementById('form');
const cuerpotabla=document.getElementById('cuerpotabla');
const lista=[];

//en caso de que se recargue la pagina y no se pierda los datos:

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
const editarlista = (indice) => {

    
    
    const{Pedido,Cliente,Telefono}=lista[indice];
    const nuevoPedido=prompt('Agrega un nuevo pedido',Pedido);
    const nuevocliente=prompt('Agrega un nuevo Nombre y Apellido',Cliente);
    const nuevotelefono=prompt('Agrega un nuevo Telefono',Telefono);
    lista[indice]={
        Pedido:nuevoPedido,
        Cliente:nuevocliente,
        Telefono:nuevotelefono,
    }
mostrarlista();
 alert('Se actualizo los datos correctamente!');
    
};

//! DELETE
const eliminarlista = (indice) => {
   if(confirm('¿Desea eliminar el elemento?')){
       lista.splice(indice,1);
           mostrarlista();
     alert('Se elimino correctamente!');
   }
   
    
    
};

//parte donde se colocara los datos para luego iniciar con el CRUD

formularioContacto.addEventListener('submit', (event) => {

    
    event.preventDefault();
    // ojo: cuando los campos estannvacios ,aparecera un alert diciendo que completes los datos
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