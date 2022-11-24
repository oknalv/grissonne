import Piece from '../Piece';
import CityPattern from '../patterns/CityPattern';
import { Component } from 'react';

class City extends Component {

    render() {
        return (
            <Piece
                {...this.props}
                type="city"
                pattern={
                    <CityPattern />
                }
                className="lined"
            />
        )
    }
    
}

export default City;