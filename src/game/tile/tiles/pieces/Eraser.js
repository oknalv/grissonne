import { Component } from "react";

class Eraser extends Component {

    render() {
        return (
            <g
                transform={`rotate(${-this.props.mainRotation * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    style={{fill:"#ff92c4"}}
                    d="m 50.625,35.625 -13.125,0 C 35.625,35.625 33.75,37.5 33.75,39.375 V 45 c 0,1.875 0,3.75 1.875,5.625 L 37.5,52.5 c 1.875,1.875 3.75,1.875 5.625,1.875 l 13.125,0 c 1.875,0 3.75,-1.875 3.75,-3.75 V 45 c 0,-1.875 0,-3.75 -1.875,-5.625 L 56.25,37.5 c -1.875,-1.875 -3.75,-1.875 -5.625,-1.875 z"
                    />
                <path
                    className="lined"
                    d="m 56.25,41.25 -15,0"
                />
                <path
                    className="lined"
                    d="m 36.621095,38.49609 1.880077,1.88008"
                />
                <path
                    className="lined"
                    d="m 39.375,43.125 v 7.5"
                />
            </g>
        )
    }
    
}

export default Eraser;