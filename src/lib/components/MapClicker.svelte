<script lang="ts">
	import { onMount } from 'svelte';
	import type MapLibreGL from 'maplibre-gl';
	import { useMap } from '$lib/hooks/useMap';

	const { isLoaded, map, onClick } = useMap();

	let { mapclick }: { mapclick: (lng: number, lat: number) => void } = $props();

	onMount(() => {
		if (!map || !isLoaded) return;

		onClick((lng, lat) => {
			mapclick(lng, lat);
			console.log(`click at: ${lat} ${lng}`);
		});
	});
</script>
