let submitEmail = document.getElementById("cta-submit");
submitEmail.onclick = validarEmail;

let inputEmail = document.getElementById("cta-email");
inputEmail.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        submitEmail.click();
    }
});

async function validarEmail(){
    
    let inputEmail = document.getElementById("cta-email");
    const spanEmail = document.getElementById("span-email");
    if(!inputEmail.checkValidity()){
        spanEmail.setAttribute("class", "text-danger");
        spanEmail.innerHTML = inputEmail.validationMessage;
    }else{
        spanEmail.setAttribute("class", "text-success");
        spanEmail.innerHTML = "Correo enviado";


        
        let url = `https://correosrancheros-default-rtdb.firebaseio.com/correos.json`;
        
        postCorreo(inputEmail.value, url)
        .then(x => {
            fetch(url)
            .then(data => data.json())
            .then((correos) => {
                let listaCorreos = "";
                console.log(correos);
                for(const data in correos){
                    listaCorreos += `<li class="list-group-item list-group-item-primary">${correos[data].correo}</li>`;
                }
                let correosRancheros = document.getElementById("correosRancheros");
                
                correosRancheros.innerHTML = listaCorreos;
            })
            .catch(error => console.log(error));
        });
        
        inputEmail.value = "";


        setTimeout(() => {
            spanEmail.innerHTML = "";
        }, 2000);
    }

    async function postCorreo(correo, url){
        const fechaCreada = new Date();

        const data = {
            correo: correo,
            fechaCreada: fechaCreada
        };

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
}