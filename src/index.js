import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Droppable from "./Droppable.js";
import Draggable from "./Draggable.js";

function App() {
    return (
        <div id="App">
            <Droppable className="container">
                <Draggable id="div-1" className="box">
                    Div 1
                </Draggable>
                <Draggable id="div-2" className="box">
                    Div 2
                </Draggable>
                <Draggable id="div-3" className="box">
                    Div 3
                </Draggable>
                <Draggable id="div-4" className="box">
                    Div 4
                </Draggable>
            </Droppable>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
