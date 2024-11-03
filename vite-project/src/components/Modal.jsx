import React from "react";

const BACKGROUND_STYLE = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  background: "rgba(0,0,0,0.7)",
  zIndex: "1000",
  cursor: "default",
};

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
};

const CLOSE_BUTTON_STYLE = {
  position: "fixed",
  fontSize: "2em",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  color: "rgb(255, 255, 255, 0.7)",
  background: "rgba(0,0,0,0.0)",
  border: "none",
};

export default function Modal({ isOpen, setOpenModal, children }) {
  if (!isOpen) return null;

  return (
    <div style={BACKGROUND_STYLE}>
      <button style={CLOSE_BUTTON_STYLE} onClick={setOpenModal}>
        &times;
      </button>
      <div style={MODAL_STYLE}>{children}</div>
    </div>
  );
}