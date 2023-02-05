<script>
  export let data
  const type = data.pokeman.types[0].type.name
</script>

<div class="flex flex-col items-center">
  <h1 class="text-4xl text-center my-8 uppercase">{data.pokeman.name}</h1>
  <p>
    Type: <strong>{type}</strong> | Height: <strong>{data.pokeman.height}</strong> | Weight: <strong>{data.pokeman.weight}</strong>
  </p>
  <img class="card-img w-60" src="{data.pokeman.sprites['front_default']}" alt="{data.pokeman.name}">
</div>
