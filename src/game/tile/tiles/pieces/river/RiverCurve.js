import { Component } from "react";

class RiverCurve extends Component {

    render() {
        return (
            <g
                transform={`rotate(${(this.props.rotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    d="m 20,40 c -5,0 -5,-5 -10,-5 H -4 v 20 l 9,0 c 5,0 5,4.75 10,4.75 h 5 c 5,0 10.25,5.25 10.25,10.25 v 5 c 0,5 4.75,5 4.75,10 l 0,9 h 20 v -14 c 0,-5 -5,-5 -5,-10 v -5 c 0,-5.25 -5,-5.25 -5,-10 0,-5 -5,-10 -10,-10 -4.75,0 -4.75,-5 -10,-5 z"
                    style={{fill: "#222222"}}
                />
            </g>
        )
    }
    
}

export default RiverCurve;