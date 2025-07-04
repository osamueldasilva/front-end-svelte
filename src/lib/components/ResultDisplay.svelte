<script lang="ts">
	export let name: string;
	export let age: number;
	export let count: number;
</script>

<section>
	<p>
		O nome <strong>{name}</strong> tem uma idade estimada de <strong>{age}</strong> anos,
		baseado em <strong>{count.toLocaleString()}</strong> pessoas.
	</p>
</section>

<style>
	section {
		font-size: 1.1rem;
		text-align: center;
		padding: 1rem 1.5rem;
		border-radius: 12px;
		background-color: #f9fafb;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	strong {
		color: #2563eb;
		font-weight: 600;
	}
</style>
