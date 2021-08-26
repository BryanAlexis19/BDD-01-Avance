let contenido = document.getElementById('contenido');
const btn1 = document.getElementById('btn1');

btn1.addEventListener("click", (e)=>{
    fetch('texto.txt')
    .then(dato => dato.text())
    .then(dato =>{
        console.log(dato);
        contenido.innerHTML = `${dato}`;
    })
});
