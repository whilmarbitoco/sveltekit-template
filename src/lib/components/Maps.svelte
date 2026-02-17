<script lang="ts">
	import { Map, MapControls } from '$lib/components/ui/map';
	import MapClicker from './MapClicker.svelte';
	import MapsDataLayer from './MapsDataLayer.svelte';
	import Marker from './Marker.svelte';
	import Button from './ui/button/button.svelte';
	import type { FeatureCollection, Feature, Point, Polygon } from 'geojson';

	// Reactive state
	let userLocation = $state<[number, number] | null>(null);
	let clickAt = $state<[number, number][]>([]);
	let isAtLast = $state(false);

	let polygon = $state<FeatureCollection>({
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: { name: 'Central Park', type: 'park' },
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[-73.9731, 40.7644],
							[-73.9819, 40.7681],
							[-73.958, 40.8006],
							[-73.9493, 40.7969],
							[-73.9731, 40.7644]
						]
					]
				} as Polygon
			} as Feature<Polygon>
		]
	});

	$effect(() => {
		let first = clickAt[0];
		let last = clickAt[clickAt.length - 1];

		isAtLast = first && last ? first[0] === last[0] && first[1] === last[1] : false;
	});

	// Update user location
	function handleLocate(coords: { longitude: number; latitude: number }) {
		userLocation = [coords.longitude, coords.latitude];
	}

	// Add a new point feature to polygon GeoJSON
	function addGeoData() {
		if (clickAt.length === 0) return;

		const newFeature: Feature<Polygon> = {
			type: 'Feature',
			properties: { name: 'New Point', type: 'park' },
			geometry: {
				type: 'Polygon',
				coordinates: [[...clickAt]]
			}
		};

		// Add new feature to the FeatureCollection
		polygon = {
			...polygon,
			features: [...polygon.features, newFeature]
		};

		// Clear click points after adding
		clickAt = [];
	}
</script>

<div class="relative h-160 w-full">
	<Map center={[-73.97, 40.78]} zoom={11}>
		<MapControls
			position="bottom-right"
			showZoom
			showCompass
			showLocate
			showFullscreen
			onlocate={handleLocate}
		/>

		<!-- User location marker -->
		<Marker
			location={userLocation}
			toolTip="Your Location"
			popUp={userLocation
				? `You are here: ${userLocation[1].toFixed(4)}, ${userLocation[0].toFixed(4)}`
				: 'Unknown'}
			popUpMarker={true}
		/>

		<!-- GeoJSON layer -->
		<MapsDataLayer geojsonData={polygon} />

		<!-- Capture map clicks -->
		<MapClicker mapclick={(lng, lat) => (clickAt = [...clickAt, [lng, lat]])} />

		{#each clickAt as point}
			<Marker
				location={point}
				toolTip="Clicked Point"
				popUp={point ? `Point: ${point[1].toFixed(4)}, ${point[0].toFixed(4)}` : 'Unknown'}
				popUpMarker={true}
				color="bg-secondary"
			/>
		{/each}

		<!-- Add point button -->
		<div class="absolute top-3 right-3 z-10">
			<Button size="sm" variant={isAtLast ? 'default' : 'outline'} onclick={addGeoData}
				>Add Point at Last Click</Button
			>
		</div>
	</Map>
</div>
