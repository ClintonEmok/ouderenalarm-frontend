import { client } from "@/sanity/client";

async function getPosts() {
  const query = `*[_type == "post"] {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
  }`;

  const posts = await client.fetch(query);
  return posts;
}

const BlogOverview = () => {
  return <div>BlogOverview</div>;
};

export default BlogOverview;
