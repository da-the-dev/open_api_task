<script lang="ts">
	import vk from '$lib/shared/stores/vk'
	import Vk from '$lib/icons/vk.svelte'
	import { get } from 'svelte/store'

	async function getName(): Promise<string> {
		const res = await fetch('https://api.vk.com/method/users.get', {
			method: 'POST',
			body: JSON.stringify({
				user_ids: get(vk).user_id,
				fields: 'about',
				access_token: get(vk).access_token,
			}),
		})
		const json = await res.json()
		return json['first_name'] + json['last_name']
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#await getName()}
		<p>Loading</p>
	{:then name}
		<p>{name}</p>
	{:catch}
		<p>Failed to load name</p>
	{/await}

	<div class="auth-b">
		<button
			class="vk-auth-button"
			on:click={() =>
				window.location.replace(
					'https://oauth.vk.com/authorize?client_id=51717321&redirect_uri=https://open-api-task.vercel.app/verify&scope=12&display=page&response_type=token'
				)}
		>
			<Vk />
		</button>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.vk-auth-button {
		width: 4rem;
		height: 4rem;
		border: none;
		border-radius: 10px;
		background-color: var(--color-bg-2);
	}
</style>
