import React, { useState } from "react";

export function useElementHover(props) {
  const [isHovering, setHovering] = useState(false);
  const Element = props.element;

  return (
    <Element
      className={props.className}
      color={isHovering ? props.hoverColor : props.elementColor}
      size={props.size}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    />
  );
}
