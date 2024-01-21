import React from "react";
interface PropType {
  body?: string;
}
const PostContent = (props: PropType) => {
  const { body } = props;

  return <div className="mt-2">{body}</div>;
};

export default PostContent;
