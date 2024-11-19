import { Post } from "@/lib/interface";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Open_Sans } from "next/font/google";

interface PostComponentProps {
  post: Post;
}

const dateFont = Open_Sans({ weight: "400", subsets: ["latin"] });
const PostComponent = ({ post }: PostComponentProps) => {
  return (
    <div className="relative flex flex-col my-3 bg-white shadow-md border border-slate-200 rounded-lg ">
      <div className="p-4 ">
        <h5 className="mb-2 text-slate-800 text-xl font-bold">{post?.title}</h5>
        <p className={`text-xs text-slate-600 $ ${dateFont.className}`}>
          {new Date(post?.publishedAt).toDateString()}
        </p>
        <p className="text-slate-600 leading-normal mb-4 line-clamp-2 font-regular pb-2">
          {post?.excerpt}
        </p>
        <Link href={`blog/posts/${post.slug?.current}`}>
          <Button className="bg-blue-700 text-white">Read more</Button>
        </Link>
        <div className="">
          {post?.topics?.map((topic) => (
            <span
              className="mr-2 mt-1 p-1 rounded-sm text-sm lowercase"
              key={topic._id}
            >
              #{topic.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
