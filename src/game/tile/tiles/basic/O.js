import { Component } from "react";
import PostIt from "../pieces/PostIt";
import P from "./P";

class O extends Component {

    render() {
        return (
            <>
            <P {...this.props} />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={-1}
                y={-.5}
            />
            </>
        )
    }

}

export default O;