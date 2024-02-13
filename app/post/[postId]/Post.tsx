"use client";

import React, { useState } from "react";
import PostContainer from "@/components/containers/postContainer/PostContainer";
import { PostDataType } from "@/types/interafce";
import { useRouter } from "next/navigation";
import PostListContainer from "@/components/containers/postContainer/PostListContainer";

const Post = ({ post, comment_list }: { post: PostDataType, comment_list: any[] }) => {
  const [post_data, setPostData] = useState(post);
  const router = useRouter();

  const onDeleteSuccess = () => {
    router.push("/");
  };

  const onLikeSuccess = () => {
    setPostData((prev) => {
      return {
        ...prev,
        likes: prev.likes + 1,
      };
    });
  };
  return (
    <div>
      <PostContainer
        post={post_data}
        onLikeSuccess={onLikeSuccess}
        onDeleteSuccess={onDeleteSuccess}
      />
      <PostListContainer posts_list={comment_list} is_comment_list={true}/>
    </div>
  );
};

export default Post;
