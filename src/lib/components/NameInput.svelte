<script lang="ts">
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

<style>
	input {
		width: 600px;
		padding: 0.75rem;
		font-size: 1.1rem;
		border: 2px solid #ccc;
		border-radius: 12px;

        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: border-color 0.2s, box-shadow 0.2s;
	}

    	input:focus {
		border-color: #2563eb;
        outline-color: #2563eb;
		box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
	}

    	@media (max-width: 768px) {
		input {
			width: 95%;
			padding: 1.5rem;
			gap: 1rem;
		}
	}

</style>
