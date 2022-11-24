import { Component } from "react";
import HalfCity from "../pieces/city/HalfCity";
import HalfField from "../pieces/field/HalfField";
import LongPath from "../pieces/path/LongPath";

class EF extends Component {

    render() {
        return (
            <>
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={1}
                tokenX={-.6}
                tokenY={-1.1}
            />
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={3}
            />
            <LongPath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={1}
            />
            <HalfCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
            />
            </>
        )
    }

}

export default EF;