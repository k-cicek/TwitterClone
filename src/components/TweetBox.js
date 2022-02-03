import React, { useState } from "react";
import {
  MediaIcon,
  GıfIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
  LocationIcon,
} from "../icons/icon";
import db from "../firebase";
import firebase from "firebase";

function TweetBox() {
  const [content, setContent] = useState("");

  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Kevser Çiçek",
        username: "@sutlucogrek",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        image: "https://media.giphy.com/media/26uf3G9yrXSn4ChLG/giphy.gif",
        avatar:
          "https://pbs.twimg.com/profile_images/1461080557455130625/6HaoF482_400x400.jpg",
      });
      setContent("");
    }
  };
  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-light">
            <MediaIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-light">
            <GıfIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-light">
            <PollIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-light">
            <EmojiIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary-light">
            <ScheduleIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-10 h-10 opacity-50 cursor-not-allowed resize-none">
            <LocationIcon className="w-5 h-5 text-primary-base" />
          </div>
        </div>

        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
}

export default TweetBox;
