import React from "react";

export default function IconBoxStyle21({ iconUrl }) {
  return (
    <div className="cs_iconbox">
      <img
        src={iconUrl}
        alt="Icon"
        style={{ height: "280px", width: "300px" }}
      />
    </div>
  );
}
