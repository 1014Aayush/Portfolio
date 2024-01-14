import React from "react";
import App from "./App";
import SkillsPage from "./SkillsPage";
import PastWorks from "./PastWorks";

export default function Overall() {
  return (
    <div className="ok">
      <App />
      <div className="Footer">
        <SkillsPage />
        <PastWorks />
      </div>
    </div>
  );
}
