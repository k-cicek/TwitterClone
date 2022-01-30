import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import PostModal from "./components/PostModal";
import Widgets from "./components/Widgets";

function App() {
  return (
    <Home>
      <Sidebar />
      <PostModal />
      <Widgets />
    </Home>
  );
}

export default App;
