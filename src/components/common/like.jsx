import React from "react";

const Like = props => {
  const { liked } = props;
  const className = "clickable fa fa-heart" + (liked ? "" : "-o");
  return (
    <i className={className} onClick={props.likeToggle} aria-hidden="true" />
  );
};

export default Like;
