import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const rows = useRef();
  const columns = useRef();
  const colors = useRef();

  const [gridRows, setRows] = useState(0);
  const [gridColumns, setColumns] = useState(0);
  const [gridColors, setColors] = useState(0);

  const [randomColors, setRandomColors] = useState([]);
  const [grid, setGrid] = useState([]);
  const [generate, setGenerate]=useState(false)

  useEffect(() => {
    let colors = [];
    for (let i in Array(gridColors).fill(null)) {
      colors.push({
        backgroundColor:
          "rgb(" +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          "," +
          Math.floor(Math.random() * 256) +
          ")"
      });
    }
    setRandomColors(colors);
  }, [gridColumns, gridColors, gridRows, generate]);

  useEffect(() => {
    let grid = [];
    for (let i in Array(gridRows).fill(null)) {
      grid.push([]);
      for (let j in Array(gridColumns).fill(null)) {
        grid[i].push(randomColors[Math.floor(Math.random() * gridColors)]);
      }
    }
    setGrid(grid);
  }, [randomColors]);

  const handleClick = () => {
    setRows(parseInt(rows.current.value));
    setColumns(parseInt(columns.current.value));
    setColors(parseInt(colors.current.value));
  };

  console.log("here", grid);
  return (
  <div style={{display:"flex",justifyContent:"center", width:"100vw", height:"100vh",  background: "linear-gradient(90deg,lightblue, white)"}}>
      <div>
      <h1 align="center">Assignment 1</h1>
      <table style={{margin:"20px",maxWidth:"500px"}}>
      <tr>
      <td><label htmlFor="rows" > Enter the no. of Rows :  </label></td> <td> <input id="rows" placeholder="Rows" type="number" ref={rows} /></td>
       </tr>
       <tr>
       <td><label htmlFor="columns" > Enter the no. of Columns : </label></td><td><input id="columns" placeholder="Columns" type="number" ref={columns} /></td>
       </tr>
       <tr>
       <td><label htmlFor="colors" > Enter the no. of Colors : </label></td><td><input id="colors" placeholder="Colors" type="number" ref={colors} /></td>
       </tr>
       <tr>
       <td></td><td ><button onClick={handleClick}>Generate</button>
     <button onClick={()=>setGenerate(!generate)}>Regenerate</button></td>
       </tr>
       </table>
      {grid ? (
        <div className="grid">
          {grid.map((item, i) => (
            <div key={"" + i} className="row">
              {item.map((style, j) => (
                <div key={"a" + j} className="colorBox" style={style}></div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
    </div>
  );
}
