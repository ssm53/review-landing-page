<script>
	import { recommendations, star1, star2, star3, formSubmitted } from '../stores/store';
	import { goto } from '$app/navigation';

	function addToRecommendations(evt) {
		// const newRecommendation = evt.target['recommendation'].value;
		// recommendations.update((recs) => [...recs, newRecommendation]);
		formSubmitted.set(true);
		console.log('hello');
	}

	function clickStar1() {
		star2.set(false);
		star3.set(false);
		star1.set(true);
		let formToShow = document.querySelector('.recommendation-form');
		formToShow.classList.remove('hidden');
	}

	function clickStar2() {
		star3.set(false);
		star1.set(true);
		star2.set(true);
		let formToShow = document.querySelector('.recommendation-form');
		formToShow.classList.remove('hidden');
	}

	function clickStar3() {
		star1.set(true);
		star2.set(true);
		star3.set(true);
		let formToShow = document.querySelector('.recommendation-form');
		formToShow.classList.remove('hidden');
	}

	function clickStar4() {
		window.location.href =
			'https://www.google.com/search?q=klinik+keluarga+desa&rlz=1C5CHFA_enGB941GB942&oq=klini&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgwIAhBFGDsYsQMYgAQyBggDEEUYOzIMCAQQIxgnGIAEGIoFMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMhAIBxAuGK8BGMcBGIAEGI4FMgoICBAAGLEDGIAEMgcICRAAGI8C0gEIMjE5N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x31cc4a1594b2be97:0x19a2ad491f0a259b,3,,,,';
	}

	function clickStar5() {
		window.location.href =
			'https://www.google.com/search?q=klinik+keluarga+desa&rlz=1C5CHFA_enGB941GB942&oq=klini&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRg5MgwIAhBFGDsYsQMYgAQyBggDEEUYOzIMCAQQIxgnGIAEGIoFMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMhAIBxAuGK8BGMcBGIAEGI4FMgoICBAAGLEDGIAEMgcICRAAGI8C0gEIMjE5N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x31cc4a1594b2be97:0x19a2ad491f0a259b,3,,,,';
	}
</script>

<head>
	<script src="https://kit.fontawesome.com/bcb26383e6.js" crossorigin="anonymous"></script>
</head>
<body>
	<div class="h-screen">
		<h1 class="text-4xl text-center mt-40">Klinik Keluarga Desa Review Page</h1>
		{#if $formSubmitted}
			<h1 class="text-4xl text-center mt-20">
				Once again, thank you so much. You can exit the page now
			</h1>
		{:else}
			<div class="flex flex-row items-center justify-center mt-20">
				{#if $star1}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<i class="fa-solid fa-star text-8xl mr-5 filled-star-1" on:click={clickStar1}></i>
				{:else}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<i class="fa-regular fa-star text-8xl mr-5 star-1" on:click={clickStar1}></i>
				{/if}
				{#if $star2}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<i class="fa-solid fa-star text-8xl mr-5 filled-star-2" on:click={clickStar2}></i>
				{:else}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<i class="fa-regular fa-star text-8xl mr-5 star-2" on:click={clickStar2}></i>
				{/if}
				{#if $star3}
					<i class="fa-solid fa-star text-8xl mr-5 filled-star-3 on:click={clickStar3}"></i>
				{:else}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<i class="fa-regular fa-star text-8xl mr-5 star-3" on:click={clickStar3}></i>
				{/if}
				<i class="fa-regular fa-star text-8xl mr-5 star-4" on:click={clickStar4}></i>
				<i class="fa-regular fa-star text-8xl star-5" on:click={clickStar5}></i>
			</div>

			<div class="flex justify-center items-center recommendation-form hidden">
				<form
					on:submit|preventDefault={addToRecommendations}
					class="w-1/2 bg-white shadow-md rounded-lg p-8"
				>
					<div class="mb-6">
						<label for="recommendation" class="block text-gray-700 text-sm font-bold mb-2">
							How can we improve?
						</label>
						<input
							type="text"
							name="recommendation"
							placeholder="Please tell us how we can improve"
							class="block w-full rounded-md py-2 px-3 border border-gray-300 h-32"
							required
						/>
						<!-- {#if 'name' in formErrors}
						<p class="text-red-500 text-xs mt-1">{formErrors.name}</p>
					{/if} -->
					</div>
					<div class="flex justify-center">
						<button
							class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md"
							type="submit"
						>
							Done
						</button>
					</div>
				</form>
			</div>

			<h1 class="text-4xl text-center mt-20">Your review means alot to us. Thank you</h1>
		{/if}
	</div>
</body>
