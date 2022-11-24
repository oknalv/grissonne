import { Component } from "react";

class Slot extends Component {

    render() {
        return (
            <g
                key={this.props.id}
                style={{display: "none"}}
            >
                <circle
                    cx={this.props.x * 30 + 45}
                    cy={this.props.y * 30 + 45}
                    r="5"
                    className="lined"
                    style={{fill: "gray", transformOrigin: "center"}}
                    ref={this.props.slotRef}
                />
            </g>
        )
    }

}

export default Slot;