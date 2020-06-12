import React from "react";

/**
 * @param className
 */
export default function Droppable(props) {
    const style = {
        overflowX: "hidden",
        overflowY: "scroll",
    };
    return (
        <div className={props.className} style={style}>
            {props.children[0]}
            {props.children[1]}
            <div style={{ height: "5px", backgroundColor: "grey" }} />
            {props.children[2]}
            {props.children[3]}
        </div>
    );
}
