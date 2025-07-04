<script lang="ts">
	import "./styles.css";

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let value = '';

	let timeout: ReturnType<typeof setTimeout>;

	onMount(() => {
		const currentName = new URLSearchParams(location.search).get('name') ?? '';
		value = currentName;
	});

	function handleInput(event: Event) {
		clearTimeout(timeout);
		const target = event.target as HTMLInputElement;
		value = target.value;

		timeout = setTimeout(() => {
			const params = new URLSearchParams();
			if (value.trim()) {
				params.set('name', value.trim());
			}
			goto(`/?${params.toString()}`, { replaceState: true, keepFocus: true });
		}, 1000);
	}
</script>

<input
	type="text"
	placeholder="Digite um nome..."
	bind:value
	on:input={handleInput}
/>
