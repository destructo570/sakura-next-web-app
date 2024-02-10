import React from "react";
import Post from "./Post";
import { fetchCommentsByPostId, fetchPost } from "@/database/queries/post";
import Header from "@/components/common/Header";

const Page = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params || {};

  const posts_list = await fetchPost(parseInt(postId));

  const comment_list = await fetchCommentsByPostId(parseInt(postId));

  return (
    <div>
      <Header/>
      <Post post={posts_list[0]} comment_list={comment_list} />
    </div>
  );
};

export default Page;
