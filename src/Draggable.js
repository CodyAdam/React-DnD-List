import React from "react";

/**
 * @param id the item identifier
 * @param className
 * @param draggable boolean
 */
export default class Draggable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dragging: false,
        };
    }

    render() {
        const style = { cursor: "grab" };
        const onDragStart = (e) => {};

        return (
            <div className={this.props.className} style={style} onDragStart={onDragStart}>
                {this.props.children}
                <span>id : {this.props.id}</span>
            </div>
        );
    }
}
