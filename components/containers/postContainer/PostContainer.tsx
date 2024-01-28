"use client";

import React from "react";
import PostFooter from "./PostFooter";
import { useAction } from "next-safe-action/hooks";
import { deletePost } from "@/actions/post";
import { Avatar } from "@nextui-org/react";import { getUserInitials } from "@/utils/helper";
import { PostExtendedUser } from "@/types/interafce";

interface PropType {
  post: PostExtendedUser;
  onDeleteSuccess: (_: any, input: any) => void;
}

const PostContainer = ({ post, onDeleteSuccess }: PropType) => {
  const { execute } = useAction(deletePost, {
    onSuccess: onDeleteSuccess,
  });

  const onDeletePost = async (postId: number) => {
    await execute({ id: postId });
  };

  return (
    <div className="p-4 divider flex gap-4">
      <div>
        <Avatar
          src={post.user.image ?? ""}
          name={getUserInitials(post.user.name ?? "")}
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h5>{post?.user?.name ?? ""}</h5>
          </div>
          <div className="flex gap-2 mr-4 items-center">
            <p className="text-secondary">{post.createdOn}</p>
          </div>
        </div>
        <p className="mt-2">{post.body ?? ""}</p>
        <PostFooter post={post} onDeletePost={onDeletePost} />
      </div>
    </div>
  );
};

export default PostContainer;
