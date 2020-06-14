import React from "react";

export default class Droppable extends React.Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.state = props.initialState;
    }

    onMouseDown(index) {
        let newState = this.state;
        newState.cards[index].drag = true;

        this.setState(newState);
    }

    onMouseUp() {
        let newState = this.state;
        for (let index = 0; index < newState.cards.length; index++) {
            newState.cards[index].drag = false;
        }

        this.setState(newState);
    }

    render() {
        const cards = this.state.cards;

        const containerStyle = {
            overflowX: "hidden",
            overflowY: "scroll",
        };

        const cardStyle = {
            transition: "all .1s",
            cursor: "grab",
        };

        const cardDragStyle = {
            transition: "all .1s",
            cursor: "grabbing",
            zIndex: "1",
            opacity: "0.5",
            scale: "0.9",
        };

        return (
            <div
                className={this.props.className}
                style={containerStyle}
                onMouseUp={this.onMouseUp}
                onMouseLeave={this.onMouseUp}
            >
                {cards.map((card, index) => {
                    return (
                        <div
                            className={this.props.cardClassName}
                            key={card.id}
                            style={!card.drag ? cardStyle : cardDragStyle}
                            onMouseDown={() => {
                                this.onMouseDown(index);
                            }}
                        >
                            {card.content}
                        </div>
                    );
                })}
            </div>
        );
    }
}
