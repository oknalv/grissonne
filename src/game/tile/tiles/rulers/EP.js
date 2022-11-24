import { Component } from "react";
import HalfCity from "../pieces/city/HalfCity";
import QuarterCity from "../pieces/city/QuarterCity";
import FullField from "../pieces/field/FullField";
import PostIt from "../pieces/PostIt";

class EP extends Component {

    render() {
        return (
            <>
            <FullField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
            />
            <QuarterCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
            />
            <HalfCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[1]}
                rotation={1}
            />
            <PostIt
                mainRotation={this.props.tile.rotation}
                x={.5}
                y={-1}
            />
            </>
        )
    }

}

export default EP;