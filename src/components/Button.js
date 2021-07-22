import React from "react";
import { Link } from "react-router-dom";

const Button = ({ description, type, link, className }) => {
  return (
    <Link to={link} className={className}>
      {description}
    </Link>
  );
};

export default Button;
