import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import HasRepliesIndicator from "./HasRepliesIndicator";
import { UserType } from "../profileContainer/ProfileInfo";
export interface PostType {
  id?: number | undefined;
  body?: string | undefined;
  likes?: number | undefined;
  user?: UserType | undefined;
  replies?: PostType[] | undefined;
}
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
        <PostHeader user={user} />
        <PostContent body={body} />
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
