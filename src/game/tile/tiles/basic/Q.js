import { Component } from "react";
import PostIt from "../pieces/PostIt";
import R from "./R";

class Q extends Component {

    render() {
        return (
            <>
            <R {...this.props} />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={1}
                y={-1}
            />
            </>
        )
    }

}

export default Q;