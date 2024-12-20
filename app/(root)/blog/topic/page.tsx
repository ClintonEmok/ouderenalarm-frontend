import Header from "@/components/Header";
import { Topic } from "@/lib/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import Link from "next/link";

import React from "react";

async function getAllTopics() {
  const query = `
  *[_type == "topic"] {
  name,
  "postCount": count(*[_type == "post" && references("topics", ^._id)]),
  slug,
  _id,
  }`;
  const topics = client.fetch(query);
  return topics;
}
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Onderwerpen",
  description: "Zoek naar blogposts op basis van onderwerp",
};

const page = async () => {
  const topics: Topic[] = await getAllTopics();
  console.log(topics);
  return (
    <div>
      <Header title="Onderwerpen" />
      <div>
        {topics?.length > 0 &&
          topics?.map((topic) => (
            <Link href={`/blog/topic/${topic.slug.current}`} key={topic._id}>
              <div className="mb-2 p-2 text-sm lowercase">
                #{topic.name} ({topic?.postCount})
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default page;
