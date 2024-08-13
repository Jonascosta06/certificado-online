import { useState } from "react";
import { Certificado } from "./Certificado";
import "./styles/style.css";

function App() {
  return (
    <Certificado course="React+Vite" date={new Date()} name="duolingo brasil" />
  );
}

export default App;
