const enviar = document.getElementById("enviar");
const reset = document.getElementById("reset");
const tarea=document.getElementById("tarea");
const lista=document.getElementById("lista");
const taskList=document.getElementById("taskList");
const dateElement=document.getElementById("fecha");

const options = {weekday : "long", month:"long", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("es", options);

let data = localStorage.getItem("TODO");
let listado;
if(data){
    listado = JSON.parse(data);
    mostrar_tabla(listado); 
}else{
    listado = [];
}


enviar.addEventListener ('click', (evento) => {
    let nuevo=tarea.value[0].toUpperCase()+tarea.value.substr(1);
    if(nuevo===""){
        alert("debes introducir un valor");
    }
    else{
        listado.push(nuevo);
        tarea.value="";
        tarea.focus();
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
    taskList.innerHTML=array.map((task)=>{
        return `<li class="item"> <i class="fa-regular fa-circle"></i> ${task}<span class="trash"><i id="papelera" class="fa-solid fa-trash"></i></span> </li>`;
    }).join(" ");
};

taskList.addEventListener("click", function(event){
    const probando= event.target; 
    if(probando.getAttribute("id")==="papelera"){
        const deleteItem=probando.parentNode;
        taskList.removeChild(deleteItem.parentNode);
        let eliminado=probando.parentNode.parentNode.textContent;
        listado=listado.filter((element)=> element!==eliminado.trim());
        localStorage.clear();
        localStorage.setItem("TODO", JSON.stringify(listado));
    }else{
        const element = event.target.firstElementChild; 
        element.className==="fa-regular fa-circle"?element.className="fa-regular fa-circle-xmark":element.className="fa-regular fa-circle";
        element.parentNode.className === "item"? element.parentNode.className += " checked": element.parentNode.className = "item";
    }
    
});
