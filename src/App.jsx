import React, { useEffect, useRef } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const moveCursor = (e) => {
      if (!isHoveringRef.current) {
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="bg-black">
      <div className="cursor"></div>
      <Nav isHoveringRef={isHoveringRef} />
      <Home isHoveringRef={isHoveringRef} />
    </div>
  );
}

export default App;