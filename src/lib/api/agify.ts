export async function fetchAge(name: string) {
	if (!name) return null;

	const res = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
	if (!res.ok) throw new Error('Erro ao buscar idade');

	return await res.json();
}
