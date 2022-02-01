import React from "react";
import Main from "./containers/Main";
import Sidebar from "./containers/Sidebar";
import PostModal from "./containers/PostModal";
import Widgets from "./containers/Widgets";

function App() {
  return (
    <Main>
      <Sidebar />
      <PostModal />
      <Widgets />
    </Main>
  );
}

export default App;
