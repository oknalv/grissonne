import { Component } from "react";
import QuarterCity from "../pieces/city/QuarterCity";
import EO from "./EO";

class EH extends Component {

    render() {
        return (
            <>
            <EO {...this.props} />
            <QuarterCity
                placeToken={this.props.placeToken}
                selectable={this.props.selectablePieces}
                id={`t${this.props.tile.id}p4`}
                mainRotation={this.props.tile.rotation}
                segment={this.props.tile.citySegments[3]}
                rotation={3}
            />
            </>
        )
    }

}

export default EH;