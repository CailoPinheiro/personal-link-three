import { copiar } from "./js/util.js";
import "./home.css";
import { Button } from "../../components/Button/Button.jsx";
import { Social } from "../../components/Social/Social.jsx";
import { Profile } from "../../components/Profile/Profile.jsx";
import { About } from "../../components/About/About.jsx";
import { useState } from "react";
import { iconCheck } from "../../components/SVGs/SVGs.jsx";

export function Home() {
  const buttonContent = (
    <Button
      onClick={pixButtonFunction}
      beforeContent={iconCheck()}
      label="Pix"
      type={["secondary-button"]}
      isButton={true}
    />
  );

  function toggleCopyButton() {
    setPixButton(
      <Button
        afterContent={iconCheck()}
        label="Copiado"
        fade="fade-in"
        type={["secondary-button"]}
        isButton={true}
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
        <Social />
        <About />
        <ul className="flex">
          <Button href="https://portfolio-cailoop.vercel.app/" label="Portfólio" type="main-button" isButton={true} />
          <Button
            href="https://l1nk.dev/cailoop"
            target="_blank"
            label="Contact me"
            type={["main-button", "flex"]}
            isButton={false}
          />
          {pixButton}
        </ul>
      </div>
      <footer className="flex">
        <span>Developed by: cailoop</span>
      </footer>
    </div>
  );
}
