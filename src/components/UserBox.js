import React from "react";
import { PointerIcon } from "../icons/icon";

function UserBox() {
  return (
    <div className="flex justify-between items-center mb-3 hover:bg-gray-light cursor-pointer rounded-full py-2 px-3 transform transition-colors duration-200">
      <img
        src="https://pbs.twimg.com/profile_images/1461080557455130625/6HaoF482_400x400.jpg"
        alt="ProfilePhoto"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col mr-8">
        <span className="font-bold text-sm text-black">kremalıböğrek</span>
        <span className="text-xs text-gray-dark ">@sutlucogrek</span>
      </div>
      <div className="flex">
        <PointerIcon className="w-5 h-5" />
      </div>
    </div>
  );
}

export default UserBox;
