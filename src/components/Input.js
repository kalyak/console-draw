import { Button } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";
import Instructions from "./Instructions";

const Input = () => {
  return (
    <Container>
      <Instructions />
      <Form>
        <Form.Group controlId='userInput'>
          <Form.Label>User input: </Form.Label>
          <Form.Control type='text' placeholder='Type your commands here.' />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
};
export default Input;
