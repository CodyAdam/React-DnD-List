import React from "react";

/**
 * @param id the item identifier
 * @param className
 * @param draggable boolean
 */
export default class Draggable extends React.Component {
    constructor(props) {
        super(props);

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.state = {
            dragging: false,
            relativePos: { x: 0, y: 0 },
            startPos: null,
        };
    }

    onMouseDown(e) {
        this.setState({ dragging: true, startPos: { x: e.clientX, y: e.clientY } });
    }

    onMouseUp(e) {
        this.setState({ dragging: false, startPos: null, relativePos: { x: 0, y: 0 } });
    }
    onMouseMove(e) {
        if (this.state.dragging)
            this.setState({
                relativePos: { x: -this.state.startPos.x + e.clientX, y: -this.state.startPos.y + e.clientY },
            });
        console.log(this.state.relativePos);
    }

    render() {
        const relativePos = this.state.relativePos;

        let style = {
            transition: "opacity .1s, scale .1s",
            cursor: "grab",
            transform: `translate(${relativePos.x}px, ${relativePos.y}px)`,
        };
        if (this.state.dragging) {
            style.zIndex = "1";
            style.cursor = "grabbing";
            style.opacity = "0.5";
            style.scale = "0.9";
        }

        return (
            <div
                className={this.props.className}
                style={style}
                onMouseDown={this.onMouseDown}
                onMouseMove={this.onMouseMove}
                onMouseUp={this.onMouseUp}
                onMouseLeave={this.onMouseUp}
            >
                {this.props.children}
                <span>id : {this.props.id}</span>
            </div>
        );
    }
}
