import { Post } from "@/lib/interface";
import Link from "next/link";
import React from "react";

interface PostComponentProps {
  post: Post;
}

const PostComponent = ({ post }: PostComponentProps) => {
  return (
    <Link
      href={`/blog/posts/${post.slug?.current}`}
      className="flex flex-row items-start  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-blue-500"
    >
      {/* Content */}
      <div className="flex flex-col justify-between p-4 leading-normal">
        {/* Title */}
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post?.title || "Untitled Post"}
        </h5>

        {/* Published Date */}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
          {post?.publishedAt
            ? new Date(post.publishedAt).toDateString()
            : "No publish date"}
        </p>

        {/* Excerpt */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {post?.excerpt?.slice(0, 100) || ""}
        </p>

        {/* Topics */}
        {post?.topics?.length > 0 && (
          <div className="mt-2">
            {post.topics.map((topic) => (
              <span
                className="mr-2 mt-1 p-1 bg-gray-200 dark:bg-gray-600 text-sm text-gray-800 dark:text-gray-300 rounded-sm"
                key={topic._id}
              >
                #{topic.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default PostComponent;
