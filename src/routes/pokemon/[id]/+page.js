export async function load({ fetch, params }) {
  const id = params.id
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`
  const res = await fetch(url)
  const pokeman = res.json()

  return { pokeman }
}