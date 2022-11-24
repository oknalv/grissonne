import { Component } from "react";
import FullCity from "../pieces/city/FullCity";
import PostIt from "../pieces/PostIt";

class C extends Component {

    render() {
        return (
            <>
            <FullCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                tokenX={1}
                tokenY={1}
            />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={1}
                y={-1}
            />
            </>
        )
    }

}

export default C;