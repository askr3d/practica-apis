
let busquedaGif = document.getElementById("gif-busqueda");

busquedaGif.addEventListener("change", async function(){
    document.getElementById("gifContenedor").innerHTML = "";
    await buscarGif(this.value);
    
});



async function buscarGif(busqueda){
    busqueda = encodeURIComponent(busqueda);
    const keyApi = "CC6gArgThteqgeRLNam9hQQKbOxBe1c2";
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&limit=5&q=${busqueda}`)
    .then(response => response.json())
    .then(json => {
        json.data
        .map(gif => gif.images.fixed_height.url)
        .forEach(url => {
            let img = document.createElement('img')
            img.src = url
            img.classList.add("col");
            img.classList.add("mb-2");
            document.getElementById("gifContenedor").appendChild(img)
        })
    })
    .catch(error => document.body.appendChild = error)
}