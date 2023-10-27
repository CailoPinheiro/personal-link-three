import React from "react";
import {Icons} from "./Icons/Icons";
import "./social.css"

export function Social() {
  return (
    <div id="social">
      <ul className="flex">
        <Icons
          href="https://github.com/CailoPinheiro"
          target="_blank"
          src="./src/pages/Home/assets/icon-github.svg"
          alt="github"
        />
        <Icons
          href="https://instagram.com/cailoop"
          target="_blank"
          src="./src/pages/Home/assets/icon-instagram.svg"
          alt="instagram"
        />
        <Icons
          href="https://linkedin.com/in/Cailo-Pinheiro"
          target="_blank"
          src="./src/pages/Home/assets/icon-linkedin.svg"
          alt="linkedin"
        />
        <Icons
          href="https://www.behance.net/cailopinheiro"
          target="_blank"
          src="./src/pages/Home/assets/icon-behance.svg"
          alt="behance"
        />
        <Icons
          href="https://twitter.com/cailoop"
          target="_blank"
          src="./src/pages/Home/assets/icon-twitter.svg"
          alt="twitter"
        />
      </ul>
    </div>
  );
}
