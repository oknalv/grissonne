import FullField from "../pieces/field/FullField";
import QuarterCity from "../pieces/city/QuarterCity";
import { Component } from "react";

class E extends Component {

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
                    rotation={1}
                />
                </>
            )
    }
}

export default E;