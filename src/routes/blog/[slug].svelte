<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const prerender = true;

	export async function load({ fetch, page }: LoadInput): Promise<LoadOutput> {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);

		const body = await res.json();

		if (res.ok) {
			return {
				props: {
					article: JSON.parse(body.article)
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script lang="ts">
	export let article;
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
