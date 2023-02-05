<script>
	// import { pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/pokemanCard.svelte';

  export let data
  let searchTerm = ''
  let filteredPokemon = []

  $: {
    if (searchTerm) { //$pokemon
      filteredPokemon = data.pokemon.filter(pokeman => pokeman.name.includes(searchTerm.toLowerCase()))
    } else {              //$pokemon
      filteredPokemon = [...data.pokemon]
    }
  }
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200 focus:outline-blue-500" type="text" bind:value={searchTerm} placeholder="Search Pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each filteredPokemon as pokeman}
    <PokemanCard {pokeman} />
  {/each}
</div>
