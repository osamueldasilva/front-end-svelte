<script lang="ts">
	import "../styles/global.css";
	import NameInput from '$lib/components/NameInput.svelte';
	import ResultDisplay from '$lib/components/ResultDisplay.svelte';
	import { navigating } from '$app/state';

	const { data } = $props();
</script>

<main>
	<article class="card" aria-label="Previsão de idade por nome">
		<header>
			<h1>Teste Front-end Voltera</h1>
			<p>Digite um nome para prever a idade estimada.</p>
		</header>

		<section aria-label="Formulário para entrada do nome">
			<NameInput />
		</section>

		{#if navigating.to}
			{#key navigating.to.url}
				{#if new URL(navigating.to.url).searchParams.get('name')}
					<section
						class="loading-container"
						aria-live="polite"
						aria-busy="true"
						aria-label="Carregando dados"
					>
						<span class="spinner" role="status" aria-hidden="true"></span>
						<p>
							Buscando idade para
							<strong>"{new URL(navigating.to.url).searchParams.get('name')}"</strong>...
						</p>
					</section>
				{/if}
			{/key}
		{:else if data.ageData && data.ageData.count > 0}
			<article aria-label="Resultado da previsão de idade">
				<ResultDisplay
					name={data.ageData.name}
					age={data.ageData.age}
					count={data.ageData.count}
				/>
			</article>
		{:else if data.name}
			<section class="no-data" aria-label="Nenhum resultado encontrado">
				<p>
					Nenhum dado encontrado para <strong>"{data.name}"</strong>.
				</p>
			</section>
		{/if}
	</article>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.card {
		width: 700px;
		padding: 2rem;
		background-color: #fff;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	h1,
	p {
		margin: 0;
	}

	.loading-container {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.1rem;
		color: #2563eb;
	}

	.spinner {
		width: 1.2rem;
		height: 1.2rem;
		border: 3px solid #ccc;
		border-top: 3px solid #2563eb;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.no-data {
		max-width: 400px;
		text-align: center;
		font-size: 1.1rem;
		padding: 1rem 1.5rem;
		background-color: #fff4f4;
		border: 2px solid #fca5a5;
		border-radius: 12px;
		color: #b91c1c;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
	}

	.no-data strong {
		color: #991b1b;
	}

	
</style>
