"use client"
import React from "react";
import CreatePostContainer from "@/components/containers/createPostContainer/CreatePostContainer";
import { createPost } from "./actions";
import { useAction } from "next-safe-action/hooks";

const CreatePostPage = () => {
  const {execute, result} = useAction(createPost);

  const onCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    if(!e?.target) return;
    e.preventDefault();
    const form = e.target;
    //Todo: fix typescript error
    await execute({body:  form.elements.body.value});
  }

  return (
    <div>
      <CreatePostContainer onCreatePost={onCreatePost}/>
    </div>
  );
};

export default CreatePostPage;
