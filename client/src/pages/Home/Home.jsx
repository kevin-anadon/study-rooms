import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

import Navbar from "../../components/Navbar.jsx";
import CreateButton from "../../components/CreateButton.jsx";
import JoinButton from "../../components/JoinButton.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1 className="tittle">Study rooms</h1>

      <CreateButton />
      <JoinButton />
    </div>
  );
}
