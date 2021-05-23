import { Container, ListGroup, Table } from "react-bootstrap";

const Output = ({ instructions, canvas }) => {
  const renderInstructions =
    instructions.length === 0
      ? null
      : instructions.map((instr, index) => (
          <ListGroup.Item key={index}>{instr}</ListGroup.Item>
        ));

  const renderCanvas =
    canvas.length === 0
      ? null
      : canvas.map((row) => {
          const renderRow = row.map((col) => <td>{col}</td>);
          return <tr>{renderRow}</tr>;
        });
  return (
    <Container>
      Input:
      <ListGroup>{renderInstructions}</ListGroup>
      <br />
      Canvas:
      <Table>
        <tbody>{renderCanvas}</tbody>
      </Table>
    </Container>
  );
};
export default Output;
