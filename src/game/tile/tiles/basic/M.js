import { Component } from "react";
import PostIt from "../pieces/PostIt";
import N from "./N";

class M extends Component {

    render() {
        return (
            <>
            <N {...this.props} />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={.5}
                y={-1}
            />
            </>
        )
    }

}

export default M;