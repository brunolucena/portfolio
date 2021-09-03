import type { EndpointOutput, Request } from '@sveltejs/kit';

const articles = [
  {
    slug: "cool-article",
    content: "my cool article",
  }
];

const db = {
  get: async (slug: string) => articles.find(article => article.slug === slug),
};

export async function get({ params }: Request): Promise<EndpointOutput> {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { slug } = params;

  const article = await db.get(slug);

  if (article) {
    return {
      body: {
        article
      }
    };
  }
}