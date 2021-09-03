import type { Article } from 'src/models/blog';
import type { EndpointOutput, Request } from '@sveltejs/kit';
import type { JSONResponse } from '@sveltejs/kit/types/endpoint';

const articles: Article[] = [
  {
    slug: "cool-article",
    content: "my cool article",
  }
];

const db = {
  get: async (slug: string) => articles.find(article => article.slug === slug),
};

export async function get({ params }: Request): Promise<EndpointOutput<{ article: JSONResponse }>> {
  // the `slug` parameter is available because this file
  // is called [slug].json.js
  const { slug } = params;

  const article = await db.get(slug);

  if (article) {
    return {
      body: {
        article: JSON.stringify(article),
      },
    };
  }
}