import { Component } from "react";

class CurvedLongRiver extends Component {

    render() {
        return (
            <g
                transform={`rotate(${(this.props.rotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    d="m 15,30 c 0,-5 5,-5 5,-10 v -10 c 0,-5 5,-5 5,0 0,5 5,5 5,0 0,-5 5,-5 5,-10 v -4 h 20 v 9 c 0,5 -5,5 -5,10 0,5 -5,5 -5,10 0,5 -5,5 -5,0 0,-5 -5,-5 -5,0 0,5 -5,5 -5,10 0,5 -5,5 -5,10 l 0,5 c 0,5 5,5 5,10 0,5 5,5 5,0 0,-5 5,-5 5,0 0,5 5,10 5,15 v 5 c 0,5 5,5 5,0 0,-5 5,-5 5,0 l 0,14 h -20 L 35,90 c 0,-5 -5,-5 -5,-10 0,-5 -5,-5 -5,0 0,5 -5,5 -5,0 v -10 c 0,-5 -5,-5 -5,-10 0,-5 -5,-5 -5,-10 C 10,35 15,35 15,40 Z"
                    style={{fill: "#222222"}}
                />
            </g>
        )
    }
    
}

export default CurvedLongRiver;