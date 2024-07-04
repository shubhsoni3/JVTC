import React from "react";
import { Link } from "react-router-dom";

export default function SideMenuWidget({ title, data }) {
  return (
    <>
      {/* <h2 className="cs_sidebar_widget_title">{title}</h2> */}
      <ul>
        {data?.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "350px", height: "350px", marginRight: "10px" }}
            />
            {/* <Link to={item.url}>{item.title}</Link> */}
          </li>
        ))}
      </ul>
    </>
  );
}
