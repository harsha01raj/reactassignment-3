import React from "react";
import "./styles.css";

const Avatar = ({ user, rounded, hideName }) => {
  const { name, imageUrl } = user;

  const avatarStyle = {
    borderRadius: rounded ? "50%" : "1rem",
    border: "2px solid #000",
    width: "200px",
    height: "150px"
  };

  return (
    <div>
      <img src={imageUrl} alt={name} style={avatarStyle} />
      {hideName ? null : <h1>{name}</h1>}
    </div>
  );
};

const Button = ({ text }) => {
  return <button className="custom-button">{text}</button>;
};

export { Avatar, Button };
