import { Component } from "react";
import HalfCity from "../pieces/city/HalfCity";
import CurvedThreeQuartersField from "../pieces/field/CurvedThreeQuartersField";
import CurvedQuarterField from "../pieces/field/CurverQuarterField";
import Curve from "../pieces/path/Curve";

class P extends Component {

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
                rotation={3}
            />
            <HalfCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
            />
            <Curve
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={3}
            />
            </>
        )
    }

}

export default P;