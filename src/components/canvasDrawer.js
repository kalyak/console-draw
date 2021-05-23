const drawCanvas = (canvas, setCanvas, newInstruction) => {
  console.log(canvas);
  const updatedCanvas = canvas;
  const commandBreak = newInstruction.split(" ");
  switch (newInstruction[0]) {
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
      // TODO Rectangle input
      const x1 = Math.min(parseInt(commandBreak[1]), parseInt(commandBreak[3]));
      const y1 = Math.min(parseInt(commandBreak[2]), parseInt(commandBreak[4]));
      const x2 = Math.max(parseInt(commandBreak[1]), parseInt(commandBreak[3]));
      const y2 = Math.max(parseInt(commandBreak[2]), parseInt(commandBreak[4]));

      //   // horizontal line
      //     const horizontalLength = x2 - x1 + 1;
      //     const horizontalLine = new Array(horizontalLength).fill("x");
      //     const topRow = updatedCanvas[y1];
      //     topRow.splice(x1, horizontalLength, ...horizontalLine);
      //     updatedCanvas[y1] = topRow;
      //     const bottomRow = updatedCanvas[y2];
      //     bottomRow.splice(x1, horizontalLength, ...horizontalLine);
      //     updatedCanvas[y1] = bottomRow;

      // //   vertical line
      //   for (let y = y1; y <= y2; y++) {
      //     updatedCanvas[y][x1] = "x";
      //     updatedCanvas[y][x2] = "x";
      //   }
      //   setCanvas(updatedCanvas);

      //horizontal line (improved)
      drawCanvas(canvas, setCanvas, `L ${x1} ${y1} ${x2} ${y1}`);
      drawCanvas(canvas, setCanvas, `L ${x1} ${y2} ${x2} ${y2}`);
      //vertical line (improved)
      drawCanvas(canvas, setCanvas, `L ${x1} ${y1} ${x1} ${y2}`);
      drawCanvas(canvas, setCanvas, `L ${x2} ${y1} ${x2} ${y2}`);

      break;
    }
    case "B": // TODO Bucket input
      break;
    case "Q": // TODO Quit input
      break;
    default:
      // TODO invalid input
      break;
  }
};
const canvasFns = { drawCanvas };
export default canvasFns;
