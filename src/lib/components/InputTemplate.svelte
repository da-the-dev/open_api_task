<script lang="ts">
	import { onMount } from 'svelte';

	export let type: string;
	export let name: string;
	export let placeholder: string;

	export let defaultValue = '';
	export let defaultNumValue: number | string = 0;
	export let required = false;
	export let isFirst = false;

	export let stringVal = '';
	export let numberVal: number | string = 0;

	export const reset = () => {
		stringVal = defaultValue;
		numberVal = defaultNumValue;
	};

	$: stringVal = defaultValue;
	$: numberVal = defaultNumValue;

	let input: HTMLInputElement | HTMLTextAreaElement;

	onMount(() => {
		if (isFirst) input.focus();
	});

	$: isEmpty = stringVal == '' ? true : false;
</script>

{#if type === 'text'}
	<input type="text" {name} bind:value={stringVal} {placeholder} {required} bind:this={input} />
{:else if type === 'password'}
	<input type="password" {name} bind:value={stringVal} {placeholder} {required} bind:this={input} />
{/if}

<style>
	input {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 3px solid black;
		border-radius: 5px;
		padding: 0.5em 0;
		color: var(--not-chosen-font-color);
		background-color: var(--main-color);
		font-size: var(--fontsize-medium1);
		transition: 0.2s linear;
		margin: 1rem;
	}
	input:focus {
		outline: none;
		color: var(--content-color);
	}
</style>
