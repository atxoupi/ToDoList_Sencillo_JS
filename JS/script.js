const enviar = document.getElementById("enviar");
const tarea=document.getElementById("tarea");
const lista=document.getElementById("lista");
let listado=[];

enviar.addEventListener ('click', (evento) => {
    evento.preventDefault();
    let nuevo=tarea.value;
    listado.push(nuevo);
    tarea.value="";
    tarea.focus();
    console.log(listado);
    mostrar_tabla(listado);
});

function mostrar_tabla(array){
    let contenido="";
    for(let i=0; i<array.length; i++){
        contenido+="<li>"+array[i]+"</li>";
    }
    lista.innerHTML=contenido;
};