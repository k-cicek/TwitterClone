import React from "react";
import FeedItem from "./FeedItem";

function FeedList({ tweets }) {
  return (
    <div>
      {tweets.map((tweet, index) => (
        <FeedItem {...tweet} key={index} />
      ))}
    </div>
  );
}

export default FeedList;
