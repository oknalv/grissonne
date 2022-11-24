import { Component } from "react";
import PostIt from "../pieces/PostIt";
import G from "./G";

class F extends Component {

    render() {
        return (
            <>
            <G {...this.props} />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={1}
                y={-.5}
            />
            </>
        )
    }

}

export default F;