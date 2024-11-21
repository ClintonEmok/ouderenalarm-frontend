/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "@/components/Header";
import { Post } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
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
const dateFont = Open_Sans({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});
const SingleBlogPost = async ({ params }: Params) => {
  const { slug } = await params;
  const post: Post = await getPost(slug);
  console.log(post);
  return (
    <div className="padding-container max-container w-full mb-12">
      <Header title={post?.title} />
      <div className="text-center ">
        <span className={`${dateFont.className} font-medium`}>
          {new Date(post?.publishedAt).toDateString()}
        </span>
        <div className="mr-2 mt-1 p-1 rounded-sm text-sm lowercase">
          {post?.topics?.map((topic) => (
            <Link key={topic._id} href={`/blog/topic/${topic.slug.current}`}>
              <span>#{topic.name}</span>
            </Link>
          ))}
        </div>

        {/* BODY */}
        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="Post" width={700} height={700} />
    ),
  },
};

const richTextStyles = `text-justify max-w-3xl m-auto prose-headings:my-5 prose-headings:text-2xl prose-p:mb-5 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4`;