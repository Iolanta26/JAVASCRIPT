(function () {
  window.addEventListener("DOMContentLoaded", executeScript);

  const POKEMON_URL = "http://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
  let pokemons = [];

  async function executeScript() {
    let json = await (await fetch(POKEMON_URL)).json();
    pokemons = json.results;
    pokemons.forEach(addPokemonEl);

    document.querySelectorAll(".pokemon .name").forEach((el) => {
      el.addEventListener("click", async (e) => {
        let detailsObj = await (
          await fetch(e.target.getAttribute("data-url"))
        ).json();
        console.log(detailsObj.sprites.front_default);
        document
          .getElementById("current-pokemon")
          .setAttribute("src", detailsObj.sprites.front_default);
      });
    });
  }

  function addPokemonEl(pokemonObj) {
    let newPokemonEl = document.createElement("div");
    newPokemonEl.className = "pokemon";
    newPokemonEl.innerHTML = `<div class="name" data-url="${pokemonObj.url}"> ${pokemonObj.name} </div>`;

    document.getElementById("list").appendChild(newPokemonEl);
  }
})();
