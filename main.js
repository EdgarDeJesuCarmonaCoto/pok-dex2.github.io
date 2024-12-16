let value1 = 1;
let value2 = 20;
function buscarPokemon(){
    for(let i=value1;i<=value2;i++){
        let url=`https://pokeapi.co/api/v2/pokemon/${i}`;
        fetch(url)
        .then(response => response.json())
        .then(response => mostrarPokemon(response))
        .catch(error=>mostrarError(error));
    }
    value1=value2+1;
    value2=value2+20;
}

function mostrarPokemon(dataPokemon){
    const card= document.getElementById("carta");
    card.innerHTML+=`
    <div class="card">
    <div class="content">
            <h2><p class="nombre">${dataPokemon.name.toUpperCase()}</p></h2>
            <img src="${dataPokemon.sprites.other["official-artwork"].front_default}">
            <p class="id">Numero:${dataPokemon.id}</p>
            <p class="peso">Peso:${dataPokemon.weight/10}kg</p>
            <p class="medida">Medida:${dataPokemon.height/10}m</p>
    </div>
    </div>
    `
}
function mostrarError(error){
    console.log("El error es: ",error)
}
window.onload=function(){
    buscarPokemon();
}

function cargarMas(){
    buscarPokemon();
}