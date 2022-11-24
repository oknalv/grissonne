import { Component } from "react";
import HalfField from "../pieces/field/HalfField";
import LongPath from "../pieces/path/LongPath";
import Protractor from "../pieces/rulers/Protractor";

class EB extends Component {

    render() {
        return (
            <>
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={3}
            />
            <HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={1}
                tokenX={-.6}
                tokenY={1.1}
            />
            <LongPath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={1}
            />
            <Protractor
                x={0}
                y={-.5}
            />
            </>
        )
    }

}

export default EB;