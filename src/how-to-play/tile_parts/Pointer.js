import { Component } from "react";

class Pointer extends Component {

    render() {
        return (
            <g
                transform={`translate(${this.props.x} ${this.props.y})`}
            >
                <path
                    d="M 0 0 L 45 0 Z"
                    className="pointer-line"
                    markerStart="url(#dot)"
                />
                <text
                    x="50"
                    y="3"
                    className="pointer-text"
                >
                    {this.props.text}
                </text>
            </g>
        );
    }
}

export default Pointer;