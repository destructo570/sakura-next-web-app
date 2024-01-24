"use client";
import React from "react";
import { Heart, MessageCircle, Repeat2, Send, Trash2 } from "lucide-react";

interface PropType {
  replies: number;
  likes: number;
  postId: number;
  onDeletePost: (id: number) => void;
}
const PostFooter = (props: PropType) => {
  const { replies, likes: likes_count, onDeletePost, postId } = props;
  
  const onDeleteHandler = () => {
    onDeletePost(postId);
  };

  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center icon-container">
        <Heart size={22} className="cursor-pointer icon" />
        <MessageCircle size={22} className="cursor-pointer" />
        <Repeat2 size={24} className="cursor-pointer" />
        <Send size={20} className="cursor-pointer" />
        <Trash2
          size={20}
          className="cursor-pointer"
          onClick={onDeleteHandler}
        />
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-secondary">{`${replies || 0} replies`}</p>
        <p className="text-secondary">·</p>
        <p className="text-secondary">{`${likes_count || 0} like`}</p>
      </div>
    </div>
  );
};

export default PostFooter;
