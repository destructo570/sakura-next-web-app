"use client";

import React from "react";
import PostFooter from "./PostFooter";
import { useAction } from "next-safe-action/hooks";
import { deletePost, likePost } from "@/actions/post";
import { Avatar } from "@nextui-org/react";
import { getUserInitials } from "@/utils/helper";
import { PostDataType } from "@/types/interafce";
import { useRouter } from "next/navigation";

interface PropType {
  post: PostDataType;
  onDeleteSuccess: (_: any, input: any) => void;
  onLikeSuccess: (_: any, input: any) => void;
}

const PostContainer = ({
  post,
  onDeleteSuccess,
  onLikeSuccess,
}: PropType) => {
  const router = useRouter();
  const { execute } = useAction(deletePost, {
    onSuccess: onDeleteSuccess,
  });
  const { execute: likePostAction } = useAction(likePost, {
    onSuccess: onLikeSuccess,
  });

  const onDeletePost = async (postId: number) => {
    await execute({ id: postId });
  };
  const onLikePost = async (postId: number) => {
    await likePostAction({ postId });
  };
  const onPostClick = () => {
    router.push(`/post/${post.id}`);
  };
  const onUserClick = (e: any) => {
    e?.stopPropagation();
    router.push(`/profile/${post.user.id}`);
  };

  return (
    <div
      className="p-4 divider flex gap-4 hover:bg-zinc-900/30 hover:cursor-pointer"
      onClick={onPostClick}
    >
      <div>
        <Avatar
          src={post.user.image ?? ""}
          name={getUserInitials(post.user.name ?? "")}
          onClick={onUserClick}
        />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h5 onClick={onUserClick}>{post?.user?.name ?? ""}</h5>
          </div>
          <div className="flex gap-2 mr-4 items-center">
            <p className="text-secondary">{post.createdOn}</p>
          </div>
        </div>
        <p className="mt-2">{post.body ?? ""}</p>
        <PostFooter
          post={post}
          onDeletePost={onDeletePost}
          onLikePost={onLikePost}
        />
      </div>
    </div>
  );
};

export default PostContainer;
