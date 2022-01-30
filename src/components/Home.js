import React from "react";

function Home({ children }) {
  return (
    <div className="flex min-h-screen max-w-7xl mx-auto border">{children}</div>
  );
}

export default Home;
