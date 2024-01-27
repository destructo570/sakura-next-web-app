import React from "react";
import { Heart, Send, Trash2 } from "lucide-react";
import { PostType } from "@/database/schema/posts";
import { useSession } from "next-auth/react";

interface PropType {
  post: PostType;
  onDeletePost: (id: number) => void;
}
const PostFooter = (props: PropType) => {
  const { data: session } = useSession();
  const { post, onDeletePost } = props;

  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center icon-container">
        <Heart size={22} className="cursor-pointer icon" />
        <Send size={20} className="cursor-pointer" />
        {session.user.id === post.userId ? (
          <Trash2
            size={20}
            className="cursor-pointer"
            onClick={onDeletePost.bind(null, post.id)}
          />
        ) : null}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-secondary">{`${0} likes`}</p>
      </div>
    </div>
  );
};

export default PostFooter;
