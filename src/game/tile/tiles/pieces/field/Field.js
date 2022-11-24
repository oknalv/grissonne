import { Component } from "react";
import FieldPattern from "../patterns/FieldPattern";
import Piece from '../Piece';

class Field extends Component {

    render() {
        return (
            <Piece
                {...this.props}
                type="field"
                pattern={
                    <FieldPattern />
                }
            />
        )
    }

}

export default Field;