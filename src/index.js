import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Droppable from "./Droppable.js";
import Draggable from "./Draggable.js";

const initialState = {
    cards: [
        { id: "card-1", content: "Card 1", drag: false },
        { id: "card-2", content: "Card 2", drag: false },
        { id: "card-3", content: "Card 3", drag: false },
        { id: "card-4", content: "Card 4", drag: false },
        { id: "card-5", content: "Card 5", drag: false },
    ],
};

function App() {
    return (
        <div id="App">
            <Droppable className="container" cardClassName="card" initialState={initialState} />
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
