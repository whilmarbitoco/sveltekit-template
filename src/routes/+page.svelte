<script>
	import BarChart from '$lib/components/BarChart.svelte';
	import AreaChart from '$lib/components/AreaChart.svelte';
	import LineChart from '$lib/components/LineChart.svelte';
	import PieChart from '$lib/components/PieChart.svelte';
	import RadarChart from '$lib/components/RadarChart.svelte';
	import RadialChart from '$lib/components/RadialChart.svelte';
	import Maps from '$lib/components/Maps.svelte';
	import * as Card from '$lib/components/ui/card';
</script>

<div class="space-y-8 p-5 sm:p-10">
	<BarChart />
	<AreaChart />
	<LineChart />

	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		<PieChart />
		<RadarChart />
		<RadialChart />
	</div>

	<Card.Root class="w-full overflow-hidden rounded-lg border">
		<Card.Header>
			<Card.Title>Farm Map</Card.Title>
			<Card.Description>View and analyze your farm.</Card.Description>
		</Card.Header>
		<Card.Content class="p-0">
			<Maps />
		</Card.Content>
	</Card.Root>
</div>
