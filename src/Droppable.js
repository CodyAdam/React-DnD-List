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
            {props.children}
        </div>
    );
}
