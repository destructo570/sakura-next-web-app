import React from "react";
import PostFooter from "./PostFooter";
import HasRepliesIndicator from "./HasRepliesIndicator";
import { PostType } from "@/types/interafce";

interface PostPropType {
  post: PostType;
  onDeletePost: (id: number) => void;
}

const PostContainer = (props: PostPropType) => {
  const { body, user, id } = props.post || {};

  return (
    <div className="p-4 divider flex gap-4">
      <div>
        <HasRepliesIndicator user={user} />
      </div>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* <Avatar>
                  <AvatarImage src={user?.image} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
            <h5>{user?.name}</h5>
          </div>
          <div className="flex gap-2 mr-4 items-center">
            <p className="text-secondary">22h</p>
          </div>
        </div>
        <div className="mt-2">{body}</div>
        <PostFooter
          replies={0}
          likes={0}
          postId={id}
          onDeletePost={props.onDeletePost}
        />
      </div>
    </div>
  );
};

export default PostContainer;
