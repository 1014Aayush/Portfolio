import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CSS_FIles/Skills.css";

export default function Skill(props) {
  const [isOpen, setIsOpen] = useState(false);

  // Variants for animations
  const skillVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -25 },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "-3rem",
      }}
    >
      <motion.div
        className="Skill_Box"
        whileHover={{ scale: 1.1, cursor: "pointer" }} // Scaling effect on hover
        onClick={() => setIsOpen(!isOpen)} // Toggle the isOpen state
        style={{ zIndex: 2 }} // Adjust as per your spacing preference
      >
        <img src={props.url} id="Title_Logo" alt="Image Here" />
        <p>{props.title}</p>
      </motion.div>

      {isOpen && (
        <motion.div
          className="Skill_Description"
          variants={skillVariants}
          initial="closed" // Start from the closed state
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 1 }}
          style={{ marginLeft: "-11%" }} // Adjust as per your spacing preference
        >
          <p>Hello There, This is Info Page</p>
        </motion.div>
      )}
    </div>
  );
}
