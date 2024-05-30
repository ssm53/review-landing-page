<script>
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
	import { formatDateTime } from '../../utils/date.js';

	export let data;
</script>

{#if data.allReviews.length > 0}
	<div>
		<table class="border-collapse w-full">
			<thead>
				<tr>
					<th class="border border-gray-400 px-4 py-2">ID</th>
					<th class="border border-gray-400 px-4 py-2">Review</th>
					<th class="border border-gray-400 px-4 py-2">Date & Time</th>
				</tr>
			</thead>
			<tbody>
				{#each data.allReviews as revDeets}
					<tr class="hover:bg-gray-100">
						<td class="border border-gray-400 px-4 py-2">{revDeets.id}</td>
						<td class="border border-gray-400 px-4 py-2">{revDeets.review}</td>
						<td class="border border-gray-400 px-4 py-2">{formatDateTime(revDeets.dateTime)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<p>No reviews to show at the moment.</p>
{/if}
