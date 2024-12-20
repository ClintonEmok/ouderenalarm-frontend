import { Post } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  async function getPosts() {
    const query = `*[_type == "post"] {
          title,
          slug,
          featuredImage,
          publishedAt,
          excerpt,
          topics[]-> {
          _id,
          slug,
          name
          }
        }`;

    const posts = await client.fetch(query);
    return posts;
  }
  const posts: Post[] = await getPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, publishedAt }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/posts/${slug.current}`,
      lastModified: new Date(publishedAt),
      // lastModified (new Date()),
      // changeFrequency: "daily",
      // priority: 0.7,
    })
  );
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    ...postEntries,
  ];
}
