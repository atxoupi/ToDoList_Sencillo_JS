const enviar = document.getElementById("enviar");
const reset = document.getElementById("reset");
const tarea=document.getElementById("tarea");
const lista=document.getElementById("lista");
const borrar=(cosa)=>{
    listado=listado.filter(item=>item===cosa);
    mostrar_tabla(listado);
};
let listado=[];

enviar.addEventListener ('click', (evento) => {
    let nuevo=tarea.value;
    if(nuevo===""){
        alert("debes introducir un valor");
    }
    else{
        listado.push(nuevo);
        tarea.value="";
        tarea.focus();
        console.log(listado);
        mostrar_tabla(listado);
    }
});
reset.addEventListener('click',(e)=>{
    listado=[];
    mostrar_tabla(listado);
});


function mostrar_tabla(array){
    let contenido="";
    for(let i=0; i<array.length; i++){
        // contenido+="<li>"+array[i]+"<button id='del' onclick={() =>deleteItem("+i+")}>Eliminar</button></li>";
        contenido+=`<li>${array[i]}<button id="del" onclick="${borrar(array[i])}">DEL</button></button> </li>`;
    }
    lista.innerHTML=contenido;
};