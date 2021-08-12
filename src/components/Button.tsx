import React from "react";

interface IButtonProps {
  width?: number;
}

const Button: React.FC<IButtonProps> = ({ width }) => (
  <div style={{ width: `${width}px` }}>Titulo</div>
);

export default Button;
