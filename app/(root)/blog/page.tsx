import Header from "@/components/Header";
import PostComponent from "@/components/PostComponent";
import { Post } from "@/lib/interface";
import { client } from "@/sanity/lib/client";

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

export const revalidate = 60;
const BlogOverview = async () => {
  const posts: Post[] = await getPosts();
  console.log(posts);
  return (
    <div className="px-12">
      <Header title="Blog" topics={true} />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 xl:grid-cols-4">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default BlogOverview;
