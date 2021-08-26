let contenido = document.getElementById('contenido');
let btn1 = document.getElementById('btn1');

btn1.addEventListener("click", (e)=>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0].email)
        contenido.innerHTML = `
        <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
        <p>${data.results[0].name.first}</p>
        `
    })
})