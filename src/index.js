import React from "react";
import ReactDOM from "react-dom";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap
} from "react-grid-dnd";

import "./input.css";

function App() {
  const [items, setItems] = React.useState([1, 2, 3, 4, 5, 6, 7, 8]);

  function onChange(sourceId, sourceIndex, targetIndex, targetId) {
    const nextState = swap(items, sourceIndex, targetIndex);
    setItems(nextState);
  }

  return (
    <GridContextProvider onChange={onChange}>
      <div className="container mx-auto">
        <GridDropZone
          className="dropzone"
          
          boxesPerRow={4}
          rowHeight={70}
        >
          {items.map((item) => (
            <GridItem key={item}>
              <div className="grid-item shadow-lg">
                <div className="grid-item-content rounded-lg ">{item}</div>
              </div>
            </GridItem>
          ))}
        </GridDropZone>
      </div>
    </GridContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
