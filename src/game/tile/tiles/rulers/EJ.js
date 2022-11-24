import { Component } from "react";
import U from "../basic/U";
import QuarterCity from "../pieces/city/QuarterCity";

class EJ extends Component {

    render() {
        return (
            <>
            <U {...this.props} />
            <QuarterCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p8`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[0]}
                rotation={1}
            />
            </>
        )
    }

}

export default EJ;