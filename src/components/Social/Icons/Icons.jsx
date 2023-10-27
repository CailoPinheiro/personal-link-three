import React from "react";

export function Icons({ hidden, href, target, src, alt }) {
  return (
    <li>
      <a href={href} target={target}>
        <img src={src} alt={alt}></img>
      </a>
    </li>
  );
}
