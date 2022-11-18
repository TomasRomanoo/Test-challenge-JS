const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;

console.log(currentDate); // "17-6-2022"


let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${currentDate}&page=1&api_key=DEMO_KEY`



obtenerDatos(url)

async function obtenerDatos(url){
    fetch(url)
        .then (response => response.json())
        .then (data =>{mostrarDatos(data.photos)})
    }
    
    let element = document.getElementById('main')

function mostrarDatos(data){
    element.innerHTML = "";

    for (let i = 0; i< data.length; i++) {
        element.innerHTML+= `
        <img src="${data[i].img_src}"/>
        `;
    }
}

let numPag = 1

function actualizarDatos(){
    //actualizo robot
    selectElement = document.querySelector('#select1');
    robot = selectElement.options[selectElement.selectedIndex].value;

    //actualizo tipoFecha
    selectElement2 = document.querySelector('#select2');
    tipoFecha = selectElement2.options[selectElement2.selectedIndex].value;

    //actualizo fecha
    selectInput = document.querySelector('#input1')
    fecha = selectInput.value

    //actualizo camara
    selectElement3 = document.querySelector('#select3')
    camara = selectElement3.options[selectElement3.selectedIndex].value;
    
    //actualizo paginaFotos

    document.querySelector('#btnPag1').addEventListener("click",function(){numPag=1})
    document.querySelector('#btnPag2').addEventListener("click",function(){numPag=2})
    document.querySelector('#btnPag3').addEventListener("click",function(){numPag=3})
    document.querySelector('#btnPag4').addEventListener("click",function(){numPag=4})
    document.querySelector('#btnPag5').addEventListener("click",function(){numPag=5})
    document.querySelector('#btnPag6').addEventListener("click",function(){numPag=6})
    document.querySelector('#btnPag7').addEventListener("click",function(){numPag=7})
    document.querySelector('#btnPag8').addEventListener("click",function(){numPag=8})
    document.querySelector('#btnPag9').addEventListener("click",function(){numPag=9})
    

    actualizarUrl(robot, tipoFecha, fecha, camara,numPag);

}


function actualizarUrl(robot, tipoFecha, fecha, camara,numPag){
    url=`https://api.nasa.gov/mars-photos/api/v1/rovers/${robot}/photos?${tipoFecha}=${fecha}&camera=${camara}&page=${numPag}&api_key=DEMO_KEY`
    obtenerDatos(url)

}








