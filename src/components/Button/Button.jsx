import React from "react";
import "./button.css";
import "../../pages/Home/home.css";

export function Button({ onClick, beforeContent, afterContent, label, type, fade }) {
  const buttonClasses = Array.isArray(type) ? type.join(" ") : type;

  return (
    <button onClick={onClick} className={buttonClasses}>
      <div className={fade}>
        {beforeContent}
        <span>{label}</span>
        {afterContent}
      </div>
    </button>
  );
}
