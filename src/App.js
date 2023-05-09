import {useState} from "react";
import './App.css';
import BoxGenerator from "./components/BoxGenerator";
import Form from "./components/Form";

function App() {
  const [boxes, setBoxes] = useState([
    {
      color: "red"
    },
    {
      color: "blue"
    },
    {
      color: "purple"
    }
  ]);


  const addBox = (inputForm) => {
    const newBox={
      color:inputForm
    }

    setBoxes([...boxes, newBox])
  }

  return (
    <div className="App">
      <h1>BoxGenerator</h1>

      <Form addBox={addBox}/>


      {
        boxes.map((box,i) => {
          return (
            <BoxGenerator key={i} box={box}/>
          )
        })
      }
    </div>
  );
}

export default App;