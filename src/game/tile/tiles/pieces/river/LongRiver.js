import { Component } from "react";

class LongRiver extends Component {

    render() {
        return (
            <g
                transform={`rotate(${(this.props.rotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    d="m 50,50 c 0,-5 5,-5 5,-10 0,-5 -5,-5 -5,-10 0,-5 5,-5 5,-10 0,-5 -5,-5 -5,-10 0,-5 5,-5 5,-10 v -4 H 35 v 4 5 c 0,5 -5,5 -5,10 0,5 5,5 5,10 v 5 c 0,5 5,5 5,10 0,5 -5,5 -5,10 0,5 5,5 5,10 0,5 -5,5 -5,10 0,5 5,5 5,10 0,5 -5,5 -5,10 l 0,4 h 20 L 55,90 v -5 c 0,-5 5,-5 5,-10 0,-5 -5,-5 -5,-10 l 0,-5 c 0,-5 -5,-5 -5,-10 z"
                    style={{fill: "#222222"}}
                />
            </g>
        )
    }
}

export default LongRiver;