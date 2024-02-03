"use client";

import React, { useState } from "react";
import PostContainer from "@/components/containers/postContainer/PostContainer";
import { PostDataType } from "@/types/interafce";
import { useRouter } from "next/navigation";

const Post = ({ post }: { post: PostDataType }) => {
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
    </div>
  );
};

export default Post;
