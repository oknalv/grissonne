import { Component } from "react";

class PostIt extends Component {

    render() {
        return (
            <g
                transform={`translate(${this.props.x * 30}, ${this.props.y * 30}) rotate(${-this.props.mainRotation * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    d="m 52.5,40.5 v 8.25 l -3.75,3.75 H 37.5 v -12"
                    style={{fill: "#ffe926", transition: "none"}}
                />
                <path
                    className="lined"
                    d="m 37.5,40.5 v -3 h 15 v 3"
                    style={{fill: "#fff7b4", transition: "none"}}
                />
                <path
                    className="lined"
                    d="m 52.5,48.75 -3.75,3.75 v -3.75 z"
                    style={{fill: "#fff7b4", transition: "none"}}
                />
            </g>
        )
    }

}

export default PostIt;