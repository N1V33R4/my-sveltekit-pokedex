<script>
	import Nav from '../components/nav.svelte';
	import PageTransition from '../components/pageTransition.svelte';

	// get pathname 
	export let data 
</script>

<div class="p-8 max-w-6xl mx-auto">
	<Nav />

	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
