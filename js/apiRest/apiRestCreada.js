$(document).ready(async function(){
    let url = `https://correosrancheros-default-rtdb.firebaseio.com/correos.json`;
    

    fetch(url)
    .then(data => data.json())
    .then((correos) => {
        let listaCorreos = "";

        for(const data in correos){
            listaCorreos += `<li class="list-group-item list-group-item-primary">${correos[data].correo}</li>`;
        }
        let correosRancheros = document.getElementById("correosRancheros");
        
        correosRancheros.innerHTML = listaCorreos;
    })
    .catch(error => console.log(error))



});

// fetch(url)
//     .then(response => response.json())
//     .then(json => )