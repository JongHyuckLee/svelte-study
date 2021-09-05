<script>
	import Item from "./Item.svelte";
	import LifeCycle from "./LifeCycle.svelte";

	let name = 'Svelte';
	let inputValue = '';
	let list = ['item1', 'item2'];
	function onClick() {
		list = [...list, inputValue];
	}
	let show = true;
	function onClickRemoveParent() {
		show=false;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the Svelte!!</p>
	<input type="text" placeholder="입력" bind:value={inputValue}>
	<button on:click={onClick}>입력</button>
	<div>입력 값 : {inputValue}</div>
	{#each list as text}
		<Item text={text}/>
	{/each}
	{#if show}
	<LifeCycle/>
	{/if}
	<button on:click={onClickRemoveParent}>부모 노드 삭제</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	input {
		margin-bottom: 10px;
		margin-top: 20px;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
