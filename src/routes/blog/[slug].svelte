<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch, page }: LoadInput): Promise<LoadOutput> {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);

		if (res.ok) {
			return {
				props: {
					body: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let body;

	const article = body.article;
</script>

<svelte:head>
	<title>Blog Post - {article.slug}</title>
</svelte:head>

<div>
	<h1>
		{article.slug}
	</h1>

	<p>
		{article.content}
	</p>
</div>
