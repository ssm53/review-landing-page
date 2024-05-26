<script>
	import { recommendations } from '../../stores/store';
</script>

<div class="flex flex-col">
	{#each $recommendations as rec}
		<p>{rec}</p>
	{/each}
</div>
