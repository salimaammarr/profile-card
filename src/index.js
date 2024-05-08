import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#7469B6",
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#AD88C6",
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E1AFD1",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#E1AFD1",
  },
  {
    skill: "NodeJS",
    level: "intermediate",
    color: "#AD88C6",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#AD88C6",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#E1AFD1",
  },
  {
    skill: "BootStrap",
    level: "intermediate",
    color: "#AD88C6",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="piglet.jpeg" alt="piglet" />;
}
function Intro() {
  return (
    <div>
      <h1>Salima Ammar</h1>
      <p>
        Software Engineering Student. When not coding, I like to play some
        music, paint or enjoy nature.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "🚀"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
