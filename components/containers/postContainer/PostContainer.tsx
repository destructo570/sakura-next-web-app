import React from 'react'
import PostHeader from './PostHeader'
import PostContent from './PostContent'
import PostFooter from './PostFooter'
import HasRepliesIndicator from './HasRepliesIndicator'

const PostContainer = () => {
  return (
    <div className='p-4 divider flex gap-4'>
        <div>
          <HasRepliesIndicator/>
        </div>
        <div>
        <PostHeader/>
        <PostContent/>
        <PostFooter/>
        </div>
    </div>
  )
}

export default PostContainer