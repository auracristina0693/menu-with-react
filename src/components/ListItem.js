import React, { useState } from "react";

const ListItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li style={{ position: "relative" }}>
      <a
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className={isActive ? "active" : ""}
        href="/"
      >
        {props.children}
      </a>
      <div className={isActive ? "animation" : ""}></div>
    </li>
  );
};

export default ListItem;
