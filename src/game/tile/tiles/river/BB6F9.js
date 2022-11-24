import { Component } from "react";
import CurvedThreeQuartersField from "../pieces/field/CurvedThreeQuartersField";
import CurvedQuarterField from "../pieces/field/CurverQuarterField";
import Curve from "../pieces/path/Curve";
import RiverCurve from "../pieces/river/RiverCurve";

class BB6F9 extends Component {

    render() {
        return (
            <>
            <CurvedThreeQuartersField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
            />
            <CurvedQuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={1}
            />
            <CurvedQuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[2]}
                rotation={3}
            />
            <RiverCurve
                rotation={3}
            />
            <Curve
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={1}
            />
            </>
        )
    }

}

export default BB6F9;