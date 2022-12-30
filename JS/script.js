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
    let contenido;
    let res=array.map((task)=>{
        return `<li>${task}</li>`;
    });
    contenido=res.join(" ");
    lista.innerHTML=contenido;
};

