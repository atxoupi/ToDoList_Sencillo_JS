const enviar = document.getElementById("enviar");
const reset = document.getElementById("reset");
const tarea=document.getElementById("tarea");
const lista=document.getElementById("lista");
const taskList=document.getElementById("taskList");

let data = localStorage.getItem("TODO");
let listado;
if(data){
    listado = JSON.parse(data);
    mostrar_tabla(listado); 
}else{
    listado = [];
}


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
        localStorage.setItem("TODO", JSON.stringify(listado));
        mostrar_tabla(listado);
    }
});
reset.addEventListener('click',(e)=>{
    listado=[];
    localStorage.clear();
    location.reload();
    mostrar_tabla(listado);
});

function mostrar_tabla(array){
    let contenido;
    let res=array.map((task)=>{
        return `<li class="item"> <i class="fa-regular fa-circle"></i> ${task}</li>`;
    });
    contenido=res.join(" ");
    taskList.innerHTML=contenido;
    console.log(taskList);
};

taskList.addEventListener("click", function(event){
    const element = event.target.firstElementChild; 
    element.className==="fa-regular fa-circle"?element.className="fa-regular fa-circle-xmark":element.className="fa-regular fa-circle";
    element.parentNode.className === "item"? element.parentNode.className += " checked": element.parentNode.className = "item";
    console.log(element.parentNode);
});
