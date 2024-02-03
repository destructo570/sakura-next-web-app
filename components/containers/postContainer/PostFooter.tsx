import React from "react";
import { Heart, Send, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { PostDataType } from "@/types/interafce";

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
        <Send size={20} className="cursor-pointer" />
        {session?.user?.id === post?.userId ? (
          <Trash2 size={20} className="cursor-pointer" onClick={handleDelete} />
        ) : null}
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-secondary">{`${post.likes} likes`}</p>
      </div>
    </div>
  );
};

export default PostFooter;
