import React from 'react'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import HasRepliesIndicator from './HasRepliesIndicator'
import { UserType } from '../profileContainer/ProfileInfo'
export interface PostType {
  id?: number;
  body?: string;
  likes?: number;
  user?: UserType;
  replies?: PostType[];
}
interface PostPropType {
  post: PostType;
}

const PostContainer = (props: PostPropType) => {
  const { body, replies, likes, user, id } = props.post || {};

  return (
    <div className="p-4 divider flex gap-4">
      <div>
        <HasRepliesIndicator replies={0} user={user}/>
      </div>
      <div className="w-full">
        <PostHeader user={user} />
        <PostContent body={body} />
        {/* <PostFooter replies={0} likes={0} postId={id}/> */}
      </div>
    </div>
  );
};

export default PostContainer;