import React, { useState } from "react";
import NavBar from "../Components/NavBAr";

export default function App() {
  const [margin, setMargin] = useState(0);

  // Function to handle the scroll event
  const handleScroll = () => {
    setMargin(window.scrollY);
  };

  // Attach the scroll event listener when the component mounts
  window.addEventListener("scroll", handleScroll);

  // Remove the scroll event listener when the component unmounts
  const cleanup = () => {
    window.removeEventListener("scroll", handleScroll);
  };

  // Cleanup the event listener when the component unmounts
  return (
    <>
      <img className="trees" src="public\images\Layer 5@3x.png" alt="Trees" />

      <div className="Wrapper" style={{ overflowY: "auto" }}>
        <NavBar />

        <div className="Middle">
          <div className="Texts">
            <h1 style={{ marginTop: margin }} id="name">
              Aayush Pokhrel{" "}
            </h1>
            <div className="secondline">
              <div className="line"></div>
              <h2>Learning</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
