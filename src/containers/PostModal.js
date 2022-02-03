import React, { useState, useEffect } from "react";
import TweetBox from "../components/TweetBox";
import { TopTweetsIcon } from "../icons/icon";
import db from "../firebase";
import FeedList from "../components/FeedList";

function PostModal() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log(tweets);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center bg-white p-4">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <span className="flex items-center justify-center w-9 h-9 cursor-pointer rounded-full hover:bg-gray-light -mr-2">
          <TopTweetsIcon className="w-5 h-5" />
        </span>
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1461080557455130625/6HaoF482_400x400.jpg"
          alt="ProfilePhoto"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>

      {/*Feed */}
      <FeedList tweets={tweets} />
    </main>
  );
}

export default PostModal;
