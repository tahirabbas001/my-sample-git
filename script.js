fetchData();

async function fetchData() {
    try{
        const pokemonName = document.getElementById("pokemonInput").value.toLowerCase();
        const response = await  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok){
            throw new Error("Unable to find")
        }
        const data = await response.json()
        console.log(data) 
        const pokemonImg = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonImg
        imgElement.style.display = "block"
        const h1Name = document.getElementById("pikaName");
        h1Name.innerText = data.name;
    }catch{
        console.log('Error')
    }
}
