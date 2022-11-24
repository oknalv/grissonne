import { Component } from "react";
import CrossingCity from "../pieces/city/CrossingCity";
import QuarterField from "../pieces/field/QuarterField";
import SidePath from "../pieces/path/SidePath";
import PostIt from "../pieces/PostIt";

class EQ extends Component {

    render() {
        return (
            <>
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={1}
                tokenX={-1.1}
                tokenY={.6}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
                rotation={2}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[2]}
                rotation={3}
                tokenX={-1.1}
                tokenY={.6}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[3]}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p4`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
                rotation={2}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p5`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[1]}
            />
            <CrossingCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p6`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                rotation={1}
            />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={1}
                y={-.5}
            />
            </>
        )
    }

}

export default EQ;