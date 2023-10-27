import { copiar } from "./js/util.js";
import "./home.css";
import { Button } from "../../components/Button/Button.jsx";
import { Social } from "../../components/Social/social.jsx";
import { Profile } from "../../components/Profile/Profile.jsx";
import { useState } from "react";
import { iconCheck } from "../../components/SVGs/SVGs.jsx";

export function Home() {
  const buttonContent = (
    <Button
      onClick={pixButtonFunction}
      beforeContent={iconCheck()}
      label="Pix"
      type={["secondary-button"]}
    />
  );

  function toggleCopyButton() {
    setPixButton(
      <Button
        afterContent={iconCheck()}
        label="Copiado"
        fade="fade-in"
        type={["secondary-button"]}
      />
    );

    setTimeout(() => {
      setPixButton(buttonContent);
    }, 5000);
  }

  function pixButtonFunction() {
    copiar();
    toggleCopyButton();
  }

  const [pixButton, setPixButton] = useState(buttonContent);

  return (
    <div id="container" className="flex">
      <Profile />

      <div id="main-content" className="flex">
        <div className="aboutMe">
          <h2>Who's Cailo</h2>
          <p>
            Eae, me chamo Cailo e tenho 23 anos. Eu sou desenvolvedor web
            front-end e designer!
          </p>
        </div>
        <ul className="flex">
          <Button label="Portfólio" type="main-button" />
          <Button label="Contact me" type="main-button" />
          {pixButton}
        </ul>
      </div>
      <footer className="flex">
        <span>Developed by: cailoop</span>
      </footer>
      <Social />
    </div>
  );
}
