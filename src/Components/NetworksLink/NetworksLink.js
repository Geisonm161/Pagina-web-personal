import React from "react";

function NetworksLink({ image, href }) {
  return (
    <div>
      <a href={href} target="_blanck">
      <img src={image} alt="icono" />
      </a>
    </div>
  );
}

export default NetworksLink;
