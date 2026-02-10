<script>
	import BarChart from '$lib/components/BarChart.svelte';
	import AreaChart from '$lib/components/AreaChart.svelte';
	import LineChart from '$lib/components/LineChart.svelte';
	import PieChart from '$lib/components/PieChart.svelte';
	import RadarChart from '$lib/components/RadarChart.svelte';
	import RadialChart from '$lib/components/RadialChart.svelte';
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
</div>
