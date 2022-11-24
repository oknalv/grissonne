import { Component } from "react";
import Bridge from "../pieces/Bridge";
import BB6F8HalfField from "../pieces/field/BB6F8HalfField";
import BB6F8LeftQuarterField from "../pieces/field/BB6F8LeftQuarterField";
import BB6F8RightQuarterField from "../pieces/field/BB6F8RightQuarterField";
import SidePath from "../pieces/path/SidePath";
import PotComponent from "../pieces/PotComponent";
import CurvedLongRiver from "../pieces/river/CurvedLongRiver";

class BB6F8 extends Component {

    render() {
        return (
            <>
            <BB6F8LeftQuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={3}
            />
            <BB6F8HalfField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={3}
            />
            <BB6F8RightQuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[2]}
                rotation={3}
            />
            <CurvedLongRiver
                rotation={3}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
            />
            <Bridge
                rotation={1}
                x={24.5}
            />
            <PotComponent
                mainRotation={this.props.tile.rotation}
                id={`t${this.props.tile.id}p4`}
                selectable={this.props.selectablePieces}
                pot={this.props.tile.pot}
                placeTokenInPot={this.props.placeTokenInPot}
                y={-14}
            />
            </>
        )
    }

}

export default BB6F8;