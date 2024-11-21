import Header from "@/components/Header";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostsByTag(topic: string) {
  const query = `
  *[_type == "post" && references(*[_type == "topic" && slug.current == "${topic}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    topic[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;

interface Params {
  params: {
    slug: string;
  };
}

// TODO: Implement metadata
// export async function generateMetadata({ params }: Params) {
//   return {
//     title: `#${params.slug}`,
//     description: `Posts with the topic ${params.slug}`,
//     openGraph: {
//       title: `#${params.slug}`,
//       description: `Posts with the topic ${params.slug}`,
//       type: "website",
//       locale: "en_US",
//       url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
//       siteName: "DevBlook",
//     },
//   };
// }

const page = async ({ params }: Params) => {
  const { slug } = await params;

  const posts: Post[] = await getPostsByTag(slug);
  return (
    <div className="px-12">
      <Header title={slug} />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
};

export default page;
