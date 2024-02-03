import React from "react";
import { Heart, MessageCircle, Send, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { PostDataType } from "@/types/interafce";
import CommentModal from "./CommentModal";

interface PropType {
  post: PostDataType;
  onDeletePost: (id: number) => void;
  onLikePost: (id: number) => void;
}
const PostFooter = (props: PropType) => {
  const { data: session } = useSession();
  const { post, onDeletePost, onLikePost } = props;

  const handleDelete = (e: any) => {
    e?.stopPropagation();
    onDeletePost(post.id);
  };
  const handleLike = (e: any) => {
    e?.stopPropagation();
    onLikePost(post.id);
  };

  return (
    <div className="mt-2">
      <div className="flex gap-4 items-center icon-container">
        <Heart size={22} className="cursor-pointer icon" onClick={handleLike} />
        {/* <MessageCircle size={20} className="cursor-pointer"/> */}
        <CommentModal postId={post.id}/>
        <Send size={20} className="cursor-pointer" />
        {session?.user?.id === post?.userId ? (
          <Trash2 size={20} className="cursor-pointer" onClick={handleDelete} />
        ) : null}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-secondary">{`${post.likes ?? 0} likes`}</p>
        <p className="text-secondary">•</p>
        <p className="text-secondary">{`${post.comments ?? 0} comments`}</p>
      </div>
    </div>
  );
};

export default PostFooter;
