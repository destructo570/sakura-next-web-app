

import { Heart, MessageCircle, Repeat2, Send } from "lucide-react";
import React from "react";
import { PostType } from "./PostContainer";
import { auth } from "@/auth/auth";

interface PropType {
  replies?: PostType[];
  likes?: number;
  postId?: number;
}
const PostFooter = (props: PropType) => {
  const session = auth();
  const { replies, likes: likes_count, postId} = props;
  
  // const onLikePost = async ()=>{
  //   const response = await db.insert(likes).values({ userId: "232gtg4rt" , postId: postId });
  //   console.log(response);
  // }

  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center icon-container">
        <Heart size={22} className="cursor-pointer icon"/>
        <MessageCircle size={22} className="cursor-pointer" />
        <Repeat2 size={24} className="cursor-pointer" />
        <Send size={20} className="cursor-pointer" />
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
