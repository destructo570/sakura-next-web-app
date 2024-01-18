import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import React from "react";

const PostFooter = () => {
  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center icon-container">
        <Heart size={22} className="cursor-pointer icon"/>
        <MessageCircle size={22} className="cursor-pointer"/>
        <Repeat2 size={24} className="cursor-pointer"/>
        <Send size={20} className="cursor-pointer"/>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-secondary">11 replies</p>
        <p className="text-secondary">·</p>
        <p className="text-secondary">240 likes</p>
      </div>
    </div>
  );
};

export default PostFooter;
