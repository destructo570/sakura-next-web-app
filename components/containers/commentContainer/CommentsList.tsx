import React from "react";

const CommentsList = ({ comment_list }) => {
    
  return (
    <div>
      {comment_list?.map((item) => {
        return <p key={item.id}>{item.body}</p>;
      })}
    </div>
  );
};

export default CommentsList;
