import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  background: #fff;
  padding: 0;
  height: 50px;
  font-size: 25px;
  cursor: pointer;
  border-bottom: 1px solid #bbb;
  transition: all 0.2s;
  &:last-child {
    border-bottom: none;
  }
  &.active {
    background: #1e3fa1;
    color: #fff;
  }
`;

const MapTypeControlButton = ({ button, handleTypeChange }) => {
  const [active, setActive] = useState(false);

  return (
    <Button
      key={button.type}
      onClick={() => {
        handleTypeChange(button.type);
        setActive(!active);
      }}
      className={active ? "active" : ""}
    >
      {button && <button.icon />}
    </Button>
  );
};

export default MapTypeControlButton;
