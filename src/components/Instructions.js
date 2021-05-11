import { Table } from "react-bootstrap";

const Instructions = () => {
  return (
    <Table style={{ textAlign: "start" }}>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>C w h</td>
          <td>Should create a new canvas of width w and height h.</td>
        </tr>
        <tr>
          <td>L x1 y1 x2 y2</td>
          <td>
            Should create a new line from (x1,y1) to (x2,y2). Currently only
            horizontal or vertical lines are supported. Horizontal and vertical
            lines will be drawn using the 'x' character.
          </td>
        </tr>
        <tr>
          <td>R x1 y1 x2 y2</td>
          <td>
            Should create a new rectangle, whose upper left corner is (x1,y1)
            and lower right corner is (x2,y2). Horizontal and vertical lines
            will be drawn using the 'x' character.
          </td>
        </tr>
        <tr>
          <td>B x y c</td>
          <td>
            Should fill the entire area connected to (x,y) with "colour" c. The
            behavior of this is the same as that of the "bucket fill" tool in
            paint programs.
          </td>
        </tr>
        <tr>
          <td>Q</td>
          <td>Should quit the program.</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Instructions;
