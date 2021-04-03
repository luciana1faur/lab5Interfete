import React from "react";
import Impresie from "./impresie";
import Container from "react-bootstrap/Container";
import "./styles.css";

const tit = "Do not get any service if you want to cancel your subscription";
const txt = `Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.`;

export default function App() {
  return (
    <div className="App">
      <Container>
        <h1>Lista de impresii</h1>
        <Impresie titlu={tit} text={txt} />
      </Container>
    </div>
  );
}
