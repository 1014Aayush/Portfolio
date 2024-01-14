import React from "react";
import Skill from "../Components/Skill";
import "../CSS_Files/skills.css";

export default function SkillsPage() {
  return (
    <div className="Skills">
      <h1>My Skills</h1>
      <Skill
        title="React"
        url="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0"
      />
      <Skill
        title="Python"
        url="https://th.bing.com/th/id/R.9591ed82caa8d20c30db96cb7298d3a9?rik=F0xN9TgbxzzQUg&pid=ImgRaw&r=0"
      />
      <Skill
        title="ML"
        url="https://gitlab8.trifork.nl/uploads/-/system/group/avatar/149/Logo_AGILEMACHINELEARNING.png"
      />

      <Skill
        title="Design"
        url="https://th.bing.com/th/id/R.a27f387f8a36864f60095b81006ad791?rik=1pY5crBJ81Y5aQ&pid=ImgRaw&r=0"
      />
    </div>
  );
}
