"use client";
import React from "react";
import { PostDataType } from "@/types/interafce";
import PostListContainer from "../profileContainer/PostListContainer";

const HomeFeedContainer = ({ posts_list }: { posts_list: PostDataType[] }) => {
  return <PostListContainer posts_list={posts_list} />;
};

export default HomeFeedContainer;
