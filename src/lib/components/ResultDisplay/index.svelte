<script lang="ts">
	import "./styles.css";

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
