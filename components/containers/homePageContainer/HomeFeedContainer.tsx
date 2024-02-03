"use client";
import React, { useState } from "react";
import PostContainer from "../postContainer/PostContainer";
import { PostDataType } from "@/types/interafce";

const HomeFeedContainer = ({ post_list }: { post_list: PostDataType[] }) => {
  const [posts, setPosts] = useState(post_list);

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
    ))
  }

  return (
    <section className="w-full">
      <header className="flex justify-center">
        <h3>Home</h3>
      </header>
      <div className="mt-4">
        {posts?.length ? renderPosts() : <p className="text-center mt-4">No posts found. Share something!</p>}
      </div>
    </section>
  );
};

export default HomeFeedContainer;
