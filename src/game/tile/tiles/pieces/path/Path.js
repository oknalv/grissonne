import Piece from '../Piece';
import PathPattern from "../patterns/PathPattern";
import { Component } from 'react';

class Path extends Component {

    render() {
        return (
            <Piece
                {...this.props}
                type="path"
                pattern={
                    <PathPattern />
                }
                className="lined"
            />
        )
    }

}

export default Path;