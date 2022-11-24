import { Component } from "react";
import QuarterCity from "../pieces/city/QuarterCity";
import HalfField from "../pieces/field/HalfField";
import LongRiver from "../pieces/river/LongRiver";

class BB6F3 extends Component {

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
                tokenX={-.6}
                tokenY={1.1}
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
            <LongRiver
                mainRotation={this.props.tile.rotation}
                rotation={1}
            />
            <QuarterCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                rotation={1}
            />
            <QuarterCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p3`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[1]}
                rotation={3}
            />
            </>
        )
    }

}

export default BB6F3;