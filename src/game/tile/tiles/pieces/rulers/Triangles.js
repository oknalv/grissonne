import { Component } from "react";

class Triangles extends Component {

    render() {
        return (
            <g
                transform={`rotate(${-(this.props.mainRotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    d="M 42.5,35 12.5,65 H 42.5 Z m -5,25 H 25 l 12.5,-12.5 z"
                    style={{fill: "#00FF0055"}}
                />
                <path
                    className="lined"
                    d="M 79.25,65 47.5,10 v 55 z M 52.5,60 V 30 L 70,60 Z"
                    style={{fill: "#00FF0055"}}
                />
                <path
                    className="lined"
                    d="m 40,62.5 h 2.5 M 40,60 h 2.5 M 40,57.5 h 2.5 M 40,55 h 2.5 M 40,52.5 h 2.5 M 40,50 h 2.5 M 40,47.5 h 2.5 M 40,45 h 2.5 M 40,42.5 h 2.5 M 40,40 h 2.5"
                />
                <path
                    className="lined"
                    d="M 47.5,62.5 H 50 M 47.5,60 H 50 m -2.5,-2.5 H 50 M 47.5,55 H 50 m -2.5,-2.5 H 50 M 47.5,50 H 50 m -2.5,-2.5 H 50 M 47.5,45 H 50 m -2.5,-2.5 H 50 m -2.5,-2.5 H 50 M 47.5,37.5 H 50 M 47.5,35 H 50 m -2.5,-2.5 H 50 M 47.5,30 H 50 m -2.5,-2.5 H 50 M 47.5,25 H 50 m -2.5,-2.5 H 50 M 47.5,20 H 50 m -2.5,-2.5 H 50"
                />
            </g>
        )
    }
}

export default Triangles;