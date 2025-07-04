<script lang="ts">
	import "../styles/global.css";
	import "./styles.css"
	
	import NameInput from '$lib/components/NameInput/index.svelte';
	import ResultDisplay from '$lib/components/ResultDisplay/index.svelte';
	import { navigating } from '$app/state';

	const { data } = $props();
</script>

<main>
	<article class="card" aria-label="Previsão de idade por nome">
		<header>
			<h1>Teste Front-end Voltera</h1>
			<p>Digite um nome para prever a idade estimada.</p>
		</header>

		<NameInput />

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