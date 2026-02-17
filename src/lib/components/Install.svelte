<script lang="ts">
	import { onMount } from 'svelte';
	import Button from './ui/button/button.svelte';
	let deferredPrompt: any = $state(null);
	let showButton = $state(false);

	onMount(() => {
		window.addEventListener('beforeinstallprompt', (e: any) => {
			e.preventDefault(); // Prevent the mini-infobar from appearing
			deferredPrompt = e;
			showButton = true;
		});
	});

	async function installApp() {
		if (!deferredPrompt) return;
		deferredPrompt.prompt(); // Show the install prompt
		const choiceResult = await deferredPrompt.userChoice;
		console.log(`User response: ${choiceResult.outcome}`);
		deferredPrompt = null;
		showButton = false;
	}
</script>

{#if showButton}
	<Button size="sm" variant="default" onclick={installApp}>Install App</Button>
{/if}
