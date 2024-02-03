"use client";
import React from "react";
import { PostDataType } from "@/types/interafce";
import PostListContainer from "../profileContainer/PostListContainer";

const HomeFeedContainer = ({ posts_list }: { posts_list: PostDataType[] }) => {
  
  return (
    <section className="w-full">
      <header className="flex justify-center">
        <h3>Home</h3>
      </header>
      <PostListContainer posts_list={posts_list} />
    </section>
  );
};

export default HomeFeedContainer;
