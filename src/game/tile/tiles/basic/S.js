import { Component } from "react";
import PostIt from "../pieces/PostIt";
import T from "./T";

class S extends Component {

    render() {
        return (
            <>
            <T {...this.props} />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={1}
                y={-1}
            />
            </>
        )
    }

}

export default S;