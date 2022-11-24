import { Component } from "react";

class RiverEnd extends Component {

    render() {
        return (
            <g>
                <path
                    className="lined"
                    d="m 60,35 c 0,-5 5,-5 5,-5 5,0 5,-5 5,-5 0,0 0,-5 -5,-5 -5,0 -5,-5 -10,-5 -5,0 -5,-5 -10,-5 -5,0 -5,5 -10,5 0,0 -5,0 -5,5 C 30,25 25,25 25,30 c 0,5 -5,5 -5,10 0,0 0,5 5,5 0,0 5,0 5,5 0,0 0,5 5,5 5,0 5,5 5,5 0,5 -5,5 -5,10 0,5 5,5 5,10 0,5 -5,5 -5,10 l 0,4 h 20 L 55,90 v -5 c 0,-5 5,-5 5,-10 0,-5 -5,-5 -5,-10 0,-5 5,-5 5,-10 0,-5 5,-5 5,-10 0,-5 -5,-5 -5,-10 z"
                    style={{fill: "#222222"}}
                />
            </g>
        )
    }
}

export default RiverEnd;