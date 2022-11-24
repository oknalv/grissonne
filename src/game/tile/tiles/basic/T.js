import { Component } from "react";
import ThreeQuartersCity from "../pieces/city/ThreeQuartersCity";
import QuarterField from "../pieces/field/QuarterField";
import SidePath from "../pieces/path/SidePath";

class T extends Component {

    render() {
        return (
            <>
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p0`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[0]}
                rotation={3}
                tokenX={-1.1}
                tokenY={.6}
            />
            <QuarterField
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p1`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.fieldSegments[1]}
            />
            <SidePath
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p2`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.pathSegments[0]}
            />
            <ThreeQuartersCity
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

export default T;