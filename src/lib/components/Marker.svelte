<script lang="ts">
	import { cn } from '$lib/utils';
	import MapMarker from './ui/map/MapMarker.svelte';
	import MarkerContent from './ui/map/MarkerContent.svelte';
	import MarkerPopup from './ui/map/MarkerPopup.svelte';
	import MarkerTooltip from './ui/map/MarkerTooltip.svelte';

	type Props = {
		location?: [number, number] | null;
		toolTip?: string;
		popUp?: string;
		popUpMarker?: boolean;
		color?: string;
	};

	let {
		location = null,
		toolTip = '',
		popUp = '',
		popUpMarker = false,
		color = 'bg-primary'
	}: Props = $props();
</script>

{#if location}
	<MapMarker latitude={location[1]} longitude={location[0]}>
		<MarkerContent>
			<div class={cn('size-4 rounded-full border-2 border-white', color)}></div>
		</MarkerContent>

		<MarkerTooltip>{toolTip}</MarkerTooltip>

		<MarkerPopup>
			<div class="space-y-1">
				<p class="font-medium text-foreground">
					{popUpMarker ? 'Marker Location' : 'Current Location'}
				</p>
				<p class="text-xs text-muted-foreground">
					{popUp ? popUp : `${location[1].toFixed(4)}, ${location[0].toFixed(4)}`}
				</p>
			</div>
		</MarkerPopup>
	</MapMarker>
{/if}
