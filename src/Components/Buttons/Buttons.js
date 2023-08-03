import React from "react";

function Buttons({ onClick, nameButton, className }) {
  return (
    <div>
      <button onClick={onClick} className={className}>
        {nameButton}
      </button>
    </div>
  );
}

export default Buttons;
