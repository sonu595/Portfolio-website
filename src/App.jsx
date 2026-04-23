// App.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Intro from './Intro';
import Home3 from "./components/Home3";
import useCursor from "./hooks/useCursor";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const { isHoveringRef } = useCursor(); // Cursor logic is now centralized

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black overflow-hidden"
    >
      {showIntro && <Intro onComplete={() => setShowIntro(false)} />}
      {!showIntro && (
        <>
          <Nav isHoveringRef={isHoveringRef} />
          <Home isHoveringRef={isHoveringRef} />
          <Home3 />
        </>
      )}
    </motion.div>
  );
}

export default App;