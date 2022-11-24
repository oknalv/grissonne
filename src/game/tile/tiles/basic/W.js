import { Component } from "react";
import Eraser from "../pieces/Eraser";
import HalfField from "../pieces/field/HalfField";
import QuarterField from "../pieces/field/QuarterField";
import SidePath from "../pieces/path/SidePath";

class W extends Component {

    render() {
        return (
            <>
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
            />
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={1}
                tokenX={-.8}
                tokenY={.8}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[2]}
                rotation={3}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={1}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p4`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[1]}
                rotation={3}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p5`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[2]}
            />
            <Eraser
                mainRotation={this.props.tile.rotation}
            />
            </>
        )
    }

}

export default W;