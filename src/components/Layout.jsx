// src/Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
import Navbar from "./Navbar";

import { motion } from "framer-motion";

import logo from "../assets/images/logo.png";


export default function Layout() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Background />

      <motion.img
        src={logo}
        initial={{
          position: "fixed",
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
          width: 220,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          top: loaded ? 20 : "50%",
          left: loaded ? 30 : "50%",
          x: loaded ? 0 : "-50%",
          y: loaded ? 0 : "-50%",
          width: loaded ? 120 : 220,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          position: "fixed",
          zIndex: 20,
        }}
        onAnimationComplete={() => {
          if (!loaded) setLoaded(true);
        }}
      />

      {loaded && <Navbar />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
        }}
      >
        <Outlet />
      </motion.div>
    </>
  );
}