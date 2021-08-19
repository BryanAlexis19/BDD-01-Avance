const caja1 = document.getElementById("txtCaja1");
const btnAdd1 = document.getElementById("btnAdd1");
const form1 = document.getElementById("form1");
const chk1 = document.createElement('input');
chk1.type="checkbox";
let label = document.createElement("label");


form1.addEventListener("submit", (e)=>{
    e.preventDefault();
});

function createRow(){
    label.textContent= caja1.value + chk1;
    // document.getElementById('tasks').appendChild(label);
    // document.getElementById('tasks').querySelector('label').appendChild(chk1);
    
    return label;
}

const arrayTarea = new Array();
const arrayNro = new Array();

function arrayTareaPush(){
    createRow();
    arrayTarea.push(label);
    console.clear();
    arrayTarea.forEach((e)=>{
        console.log(e);
    });
}

btnAdd1.addEventListener('click', arrayTareaPush);

//document.getElementById("tasks").appendChild(chk1);

