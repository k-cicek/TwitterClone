import React from "react";
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from "../icons/icon";

function FeedItem({
  avatar,
  content,
  displayName,
  image,
  timestamp,
  username,
}) {
  return (
    <article className="flex space-x-3 border-b border-t border-gray-extraLight px-4 py-3 cursor-pointer hover:bg-gray-exxLight transform transition-colors duration-200">
      <img src={avatar} alt="ProfilePhoto" className="w-11 h-11 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center text-sm">
          <h4 className="font-bold">{displayName}</h4>
          <span className="ml-2 text-gray-dark">{username}</span>
          <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full"></div>
          <span className="text-gray-dark">
            {timestamp?.toDate().toLocaleTimeString("tr-TR")}
          </span>
        </div>
        <p className="mt-2 text-gray-black text-sm">{content}</p>
        {image && <img src={image} alt="Tweet" className="my-2 rounded-xl max-h-96"/>}
        <ul className="-ml-2 mt-3 flex justify-between max-w-md">
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100">
                <ReplyIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
                <span className="group-hover:text-primary-base">7</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-100 ">
                <RetweetIcon className="w-5 h-5 group-hover:text-green-500 " />
                </div>
                <span className="group-hover:text-green-500">7</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-red-100  ">
                <LikeIcon className="w-5 h-5 group-hover:text-red-500 " />
                </div>
                <span className="group-hover:text-red-500">7</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-dark text-sm group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-100">
                <ShareIcon className="w-5 h-5 group-hover:text-primary-base" />
                </div>
                <span className="group-hover:text-primary-base">7</span>
            </li>
        </ul>
      </div>
    </article>
  );
}

export default FeedItem;
