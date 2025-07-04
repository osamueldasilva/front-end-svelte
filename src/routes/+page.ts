import type { PageLoad } from './$types';
import { fetchAge } from '$lib/api/agify';

export const load: PageLoad = async ({ url }) => {
	const name = url.searchParams.get('name') ?? '';

	if (!name) return { ageData: null, name };

	const ageData = await fetchAge(name);
	return { ageData, name };
};
