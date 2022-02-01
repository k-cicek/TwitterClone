import React from "react";
import { SearchIcon, SettingsIcon } from "../icons/icon";

function Widgets() {
  return (
    <aside className="bg-purple-500 w-80">
      <h1>Time Line</h1>
      <SearchIcon className="w-7 h-7" />
      <SettingsIcon className="w-7 h-7" />
    </aside>
  );
}

export default Widgets;
