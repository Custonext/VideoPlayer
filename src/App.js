import CryptoList from "./components/CryptoList";
import "./styles.css";
import React from "react";

export default function App(props) {
  console.log(props.divElement.dataset.formId)
  return (
    
      <CryptoList />
  );
}