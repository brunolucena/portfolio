
<svelte:head>
  <title>Blog Post</title>  
</svelte:head>

<script context="module" lang="ts">
  import type { LoadInput, LoadOutput } from '@sveltejs/kit';

  export async function load({ fetch, page  }: LoadInput): Promise<LoadOutput> {
    const url = `/blog/${page.params.slug}`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          article: await res.json(),
        },
      }
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`),
    }
  }
</script>

