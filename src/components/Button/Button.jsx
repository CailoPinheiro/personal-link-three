import React from "react";
import "./button.css";
import "../../pages/Home/home.css";

export function Button({
  isButton,
  target,
  href,
  onClick,
  beforeContent,
  afterContent,
  label,
  type,
  fade,
}) {
  const buttonClasses = Array.isArray(type) ? type.join(" ") : type;

  if (isButton) {
    return (
      <button
        href={href}
        target={target}
        onClick={onClick}
        className={buttonClasses}
      >
        <div className={fade}>
          {beforeContent}
          <span>{label}</span>
          {afterContent}
        </div>
      </button>
    );
  } else {
    return (
      <li id="ancora" >
        <a href={href} target={target} className={buttonClasses}>
          {label}
        </a>
      </li>
    );
  }
}
