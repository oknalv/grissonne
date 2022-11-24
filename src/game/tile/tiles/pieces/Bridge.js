import { Component } from "react";

class Bridge extends Component {

    render() {
        return (
            <g
                transform={`rotate(${(this.props.rotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
            >
                <g
                    transform={`translate(${this.props.x || 0}, ${this.props.y || 0})`}
                    style={{transformOrigin: "center"}}
                >
                    <path
                        className="lined"
                        d="m 29,34 0,6 h 32 l 0,-6 -6,0 v 2 H 35 v -2 z"
                        style={{fill: "#dddddd", transition: "none"}}
                    />
                    <path
                        className="lined"
                        d="m 29,50 h 32 l 0,6 -6,0 v -2 H 35 v 2 h -6 z"
                        style={{fill: "#dddddd", transition: "none"}}
                    />
                </g>
            </g>
        )
    }
}

export default Bridge;