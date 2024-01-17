import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import homeBackgroundVideo from "../../assets/videos/homeBackgroundVideo.mp4";
import CreateButton from "../../components/CreateButton.jsx";
import JoinButton from "../../components/JoinButton.jsx";

export default function Home() {
  return (
    <div className="background">
      <div className="overlay"></div>
      <video src={homeBackgroundVideo} autoPlay loop muted />
      <div className="content">
        <h1 className="tittle">Study rooms</h1>
        <CreateButton />
        <JoinButton />
      </div>
    </div>
  );
}
