import React from "react";

function Main() {
  return (
    <div className="profile-details">
      <img
        src="./assets/profile.png"
        alt="profile"
        width="320px"
        height="320px"
      />
      <h1 className="name">Laura Smith</h1>
      <p className="title">Frontend Developer</p>
      <a href="www.example.com">laurasmith.website</a>
      <div className="btn">
        <button className="icon-button email">
          <img
            src="./assets/mail.svg"
            alt="mail link"
            className="icon"
          />
          Email
        </button>
        <button className="icon-button linkedin">
          <img
            src="./assets/linkedin.svg"
            alt="linkedin link"
            className="icon"
          />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Main;
