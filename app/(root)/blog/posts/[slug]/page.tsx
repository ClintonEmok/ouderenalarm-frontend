import Header from "@/components/Header";
import { Post } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import React from "react";

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] {
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        topics[]-> {
        _id,
        slug,
        name
        }
    }`;

  const post = await client.fetch(query);
  return post;
}
const dateFont = Open_Sans({ weight: "400", subsets: ["latin"] });
const SingleBlogPost = async ({ params }: Params) => {
  const { slug } = await params;
  const post: Post = await getPost(slug);
  console.log(post);
  return (
    <div>
      <Header title={post?.title} />
      <div className="text-center">
        <span className={`${dateFont.className}`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mt-5">
          {post?.topics?.map((topic) => (
            <Link key={topic._id} href={`/blog/topics/${topic.slug.current}`}>
              <span>#{topic.name}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* {post?.body} */}
    </div>
  );
};

export default SingleBlogPost;
