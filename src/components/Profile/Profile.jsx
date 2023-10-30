import React from "react";
import "./profile.css"

export function Profile() {
  return (
    <div id="profile">
      <img
        id="profile-img"
        src="/profile-img.svg"
        alt="foto de perfil"
      />
      <p>Cailo Pinheiro</p>
      <span className="sub-text">Desenvolvedor Web - Front-end</span>
    </div>
  );
}
