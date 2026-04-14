// src/Header.jsx
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";

export default function Header({ show }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        position: "fixed",
        top: 20,
        left: 30,
        zIndex: 5,
      }}
    >
      <motion.img
        layoutId="logo"
        src={logo}
        style={{ width: "120px" }}
      />
    </motion.div>
  );
}