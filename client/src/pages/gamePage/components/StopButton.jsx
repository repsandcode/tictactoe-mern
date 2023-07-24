import React from "react";
import "./StopButton.css";
import { Link } from "react-router-dom";

export const StopButton = () => {
  return (
    <Link to={"/"}>
      <button className="stop-button">Stop</button>;
    </Link>
  );
};
