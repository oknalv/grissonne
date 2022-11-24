import { Component } from "react";
import Bridge from "../pieces/Bridge";
import QuarterField from "../pieces/field/QuarterField";
import LongPath from "../pieces/path/LongPath";
import LongRiver from "../pieces/river/LongRiver";

class BB6F11 extends Component {

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
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={1}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[2]}
                rotation={2}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[3]}
                rotation={3}
            />
            <LongRiver
                mainRotation={this.props.tile.rotation}
            />
            <LongPath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p4`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={1}
            />
            <Bridge />
            </>
        )
    }

}

export default BB6F11;