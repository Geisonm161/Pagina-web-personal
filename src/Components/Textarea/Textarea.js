import React from "react";

function Textarea({className, onChange}) {
  return (
    <div>
      <textarea className={className} onChange={onChange} placeholder="Ejemplo M:5 S:10 L:25 " />
    </div>
  );
}

export default Textarea;
