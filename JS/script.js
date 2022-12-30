const enviar = document.getElementById("enviar");
const reset = document.getElementById("reset");
const tarea=document.getElementById("tarea");
const lista=document.getElementById("lista");
const removeElement=document.getElementsByTagName("span");


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
        console.log(removeElement);
        for(tipo in removeElement){
            console.log("que devuelve el span...");
            console.log(tipo);
        }
        console.log(reset);
    }
});
reset.addEventListener('click',(e)=>{
    listado=[];
    mostrar_tabla(listado);
});

// function borrar(cosa){
//     console.log(listado);
//     listado=listado.filter((item)=>item!==cosa);
//     // mostrar_tabla(listado);
// };

// removeElement.addEventListener('click',(e)=>{
//     delItem=e.target;
//     delItem.parentNode.parentNode.removeChild(delItem.parentNode);
//     listado=listado.filter((item)=>item!==delItem.parentNode.value);
//     console.log("Eliminando...");
// });

function mostrar_tabla(array){
    let contenido="";
    for(let i=0; i<array.length; i++){
        // contenido+="<li>"+array[i]+"<span id='del' >Eliminar</span></li>";
        contenido+=`<li>${array[i]}<button id="del" >DEL</button> </li>`;
        // onClick=${() => borrar(array[i])}
    }
    lista.innerHTML=contenido;
};

