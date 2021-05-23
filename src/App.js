import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [instructions, setInstructions] = useState([]);
  const [canvas, setCanvas] = useState([]);
  return (
    <div className='App'>
      <Container>
        <Input
          instructions={instructions}
          setInstructions={setInstructions}
          canvas={canvas}
          setCanvas={setCanvas}
        />
        <Output instructions={instructions} canvas={canvas} />
      </Container>
    </div>
  );
}

export default App;
