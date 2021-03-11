import React, { useState } from "react";

const ListItem = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li>
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
