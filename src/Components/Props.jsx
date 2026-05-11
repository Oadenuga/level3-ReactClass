import React from "react";

const Button = ({backgroundcolor, width}) => {
  return (
    <div>
        <button style= {{"backgroundColor" : backgroundcolor, "width": width}}>hello </button>
    </div>)
};

export default Button;
