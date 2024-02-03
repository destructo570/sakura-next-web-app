"use client";
import { PostDataType } from "@/types/interafce";
import React, { useState } from "react";
import PostContainer from "./PostContainer";

interface PropType {
  posts_list: PostDataType[];
}

const PostListContainer = (props: PropType) => {
  const { posts_list } = props;
  const [posts, setPosts] = useState(posts_list);

  const onDeleteSuccess = (_: any, input: any) => {
    setPosts((prev) => prev.filter((item) => item.id !== input.id));
  };

  const onLikeSuccess = (_: any, input: any) => {
    setPosts((prev) => {
      let new_state = [...prev];
      new_state = new_state.map((item) => {
        if (item.id === input.postId) {
          return {
            ...item,
            likes: item?.likes ? item?.likes + 1 : 0,
          };
        } else {
          return item;
        }
      });

      return new_state;
    });
  };

  const renderPosts = () => {
    return posts?.map((item) => (
      <PostContainer
        post={item}
        key={item.id}
        onDeleteSuccess={onDeleteSuccess}
        onLikeSuccess={onLikeSuccess}
      />
    ));
  };

  return (
    <div className="w-full">
      {posts?.length ? (
        renderPosts()
      ) : (
        <p className="text-center mt-4">No posts found. Share something!</p>
      )}
    </div>
  );
};

export default PostListContainer;
