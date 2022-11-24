import { Component } from "react";
import FullCity from "../pieces/city/FullCity";
import Triangles from "../pieces/rulers/Triangles";

class EK extends Component {

    render() {
        return (
            <>
            <FullCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p8`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                tokenX={1}
                tokenY={1}
            />
            <Triangles
                mainRotation={this.props.tile.rotation}
            />
            </>
        )
    }

}

export default EK;