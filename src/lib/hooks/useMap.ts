// useMap.ts
import { getContext, onMount, onDestroy } from 'svelte';
import type MapLibreGL from 'maplibre-gl';

export function useMap() {
	const mapCtx = getContext<{
		getMap: () => MapLibreGL.Map | null;
		isLoaded: () => boolean;
	}>('map');

	if (!mapCtx) throw new Error('useMap must be called inside <Map>');

	const map = mapCtx.getMap();
	const isLoaded = mapCtx.isLoaded();

	// Store cleanup functions
	const cleanups: (() => void)[] = [];

	function onClick(callback: (lng: number, lat: number, e: MapLibreGL.MapMouseEvent) => void) {
		if (!map) return;

		const handler = (e: MapLibreGL.MapMouseEvent) => {
			const { lng, lat } = e.lngLat;
			callback(lng, lat, e);
		};

		map.on('click', handler);
		cleanups.push(() => map.off('click', handler));
	}

	// Auto-cleanup on component destroy
	onDestroy(() => {
		cleanups.forEach((c) => c());
	});

	return {
		map,
		isLoaded,
		onClick
	};
}
