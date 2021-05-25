const drawCanvas = (canvas, setCanvas, newInstruction) => {
  // console.log(canvas);
  const updatedCanvas = canvas;
  const commandBreak = newInstruction.split(" ");
  switch (commandBreak[0]) {
    case "C": {
      // Canvas input
      const width = parseInt(commandBreak[1]);
      const height = parseInt(commandBreak[2]);
      for (let h = 0; h <= height + 1; h++) {
        const newRow = [];
        for (let w = 0; w <= width + 1; w++) {
          if (h === 0 || h === height + 1) {
            newRow.push("-");
          } else {
            if (w === 0 || w === width + 1) {
              newRow.push("|");
            } else {
              newRow.push(null);
            }
          }
        }
        updatedCanvas.push(newRow);
      }
      setCanvas(updatedCanvas);
      break;
    }
    case "L": {
      //Line input
      const x1 = Math.min(parseInt(commandBreak[1]), parseInt(commandBreak[3]));
      const y1 = Math.min(parseInt(commandBreak[2]), parseInt(commandBreak[4]));
      const x2 = Math.max(parseInt(commandBreak[1]), parseInt(commandBreak[3]));
      const y2 = Math.max(parseInt(commandBreak[2]), parseInt(commandBreak[4]));
      const lineLength = x2 - x1 + 1;
      if (y1 === y2) {
        //horizontal line
        const updatedRow = updatedCanvas[y1];
        const line = new Array(lineLength).fill("x");
        updatedRow.splice(x1, lineLength, ...line);
        updatedCanvas[y1] = updatedRow;
        setCanvas(updatedCanvas);
      } else if (x1 === x2) {
        //vertical line
        for (let y = y1; y <= y2; y++) {
          updatedCanvas[y][x1] = "x";
        }
        setCanvas(updatedCanvas);
      }
      //   else{// TODO not vertical or horizontal input or wrong spacing}
      break;
    }
    case "R": {
      //Rectangle input
      const x1 = parseInt(commandBreak[1]);
      const y1 = parseInt(commandBreak[2]);
      const x2 = parseInt(commandBreak[3]);
      const y2 = parseInt(commandBreak[4]);

      //horizontal line (improved)
      drawCanvas(canvas, setCanvas, `L ${x1} ${y1} ${x2} ${y1}`);
      drawCanvas(canvas, setCanvas, `L ${x1} ${y2} ${x2} ${y2}`);
      //vertical line (improved)
      drawCanvas(canvas, setCanvas, `L ${x1} ${y1} ${x1} ${y2}`);
      drawCanvas(canvas, setCanvas, `L ${x2} ${y1} ${x2} ${y2}`);

      break;
    }
    case "B": {
      // TODO Bucket input
      const x = parseInt(commandBreak[1]);
      const y = parseInt(commandBreak[2]);
      const c = commandBreak[3];
      console.log(commandBreak);
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          console.log("Evaluating: ", x + i, y + j);
          if (updatedCanvas[y + j][x + i] === null) {
            updatedCanvas[y + j][x + i] = c;
            console.log("Coloring: ", x + i, y + j);
            setCanvas(updatedCanvas);
            if (!(i === 0 && j === 0)) {
              drawCanvas(updatedCanvas, setCanvas, `B ${x + i} ${y + j} ${c}`);
            }
          }
        }
      }

      break;
    }
    case "Q": // TODO Quit input
      break;
    default:
      // TODO invalid input
      break;
  }
};
const canvasFns = { drawCanvas };
export default canvasFns;
