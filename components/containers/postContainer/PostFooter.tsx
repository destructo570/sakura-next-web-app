"use client";
import React, { MouseEventHandler } from "react";
import { Heart, MessageCircle, Repeat2, Send, Trash2 } from "lucide-react";
import { PostType } from "./PostContainer";

interface PropType {
  replies?: number | undefined;
  likes?: number | undefined;
  postId: number | undefined;
  onDeletePost: MouseEventHandler<SVGSVGElement>;
}
const PostFooter = (props: PropType) => {
  const { replies, likes: likes_count, onDeletePost } = props;

  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center icon-container">
        <Heart size={22} className="cursor-pointer icon" />
        <MessageCircle size={22} className="cursor-pointer" />
        <Repeat2 size={24} className="cursor-pointer" />
        <Send size={20} className="cursor-pointer" />
        <Trash2 size={20} className="cursor-pointer" onClick={onDeletePost} />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-secondary">{`${replies?.length} replies`}</p>
        <p className="text-secondary">·</p>
        <p className="text-secondary">{`${likes_count} like`}</p>
      </div>
    </div>
  );
};

export default PostFooter;
