import React, { useState } from "react";
import "./ListItem.css";

const ListItem = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="listItem">
      <a
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className={isActive ? "active" : ""}
        href="/"
      >
        {children}
      </a>
      <div className={isActive ? "animation" : ""}></div>
    </li>
  );
};

export default ListItem;
