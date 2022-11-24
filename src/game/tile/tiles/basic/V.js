import { Component } from "react";
import CurvedThreeQuartersField from "../pieces/field/CurvedThreeQuartersField";
import CurvedQuarterField from "../pieces/field/CurverQuarterField";
import Curve from "../pieces/path/Curve";

class V extends Component {

    render() {
        return (
            <>
            <CurvedQuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
            />
            <CurvedThreeQuartersField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={1}
            />
            <Curve
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
            />
            </>
        )
    }

}

export default V;