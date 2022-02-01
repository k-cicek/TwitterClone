import React from "react";
import {
  TopTweetsIcon,
  MediaIcon,
  GıfIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  LocationIcon,
  ReplyIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from "../icons/icon";

function PostModal() {
  return (
    <main className="flex-1 bg-pink-200">
      <h1>Post Modal</h1>
      <TopTweetsIcon className="w-7 h-7" />
      <MediaIcon className="w-7 h-7" />
      <GıfIcon className="w-7 h-7" />
      <PollIcon className="w-7 h-7" />
      <EmojiIcon className="w-7 h-7" />
      <ScheduleIcon className="w-7 h-7" />
      <LocationIcon className="w-7 h-7" />
      <ReplyIcon className="w-7 h-7" />
      <RetweetIcon className="w-7 h-7" />
      <LikeIcon className="w-7 h-7" />
      <ShareIcon className="w-7 h-7" />
    </main>
  );
}

export default PostModal;
