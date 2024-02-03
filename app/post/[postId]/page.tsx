import React from "react";
import Post from "./Post";
import { fetchCommentsByPostId } from "@/database/queries/comment";
import { fetchPost } from "@/database/queries/post";

const Page = async ({ params }: { params: { postId: string } }) => {
  const { postId } = params || {};

  const posts_list = await fetchPost(parseInt(postId));

  const comment_list = await fetchCommentsByPostId(parseInt(postId));
    
  return (
    <div>
      <Post post={posts_list[0]} comment_list={comment_list}/>
    </div>
  );
};

export default Page;
