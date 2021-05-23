import { useState } from "react";
import { Button } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";
import canvasFns from "./canvasDrawer";
import Instructions from "./Instructions";

const Input = ({ instructions, setInstructions, canvas, setCanvas }) => {
  const [form, setForm] = useState({});
  // const [errors, setErrors] = useState({});
  // const instructionCheck = ["C", "L", "R", "B", "Q"];

  const setField = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newInstruction = event.target["userInput"].value;
    // console.log(event.target["userInput"].value);
    // if (instructionCheck.includes(newInput[0])) {
    setInstructions([...instructions, newInstruction]);
    canvasFns.drawCanvas(canvas, setCanvas, newInstruction);
    event.target["userInput"].value = "";
  };
  //     }

  return (
    <Container>
      <Instructions />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='userInput'>
          <Form.Label>User input: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Type your commands here.'
            onChange={(e) => setField("userInput", e.target.value)}
            // isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type='invalid' />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
};
export default Input;
