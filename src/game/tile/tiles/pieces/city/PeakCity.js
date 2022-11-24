import { Component } from "react";
import City from "./City";

class PeakCity extends Component {

    render() {
        return (
            <City
                {...this.props}
                shape="m 0,90 c 22.5,-22.5 22.5,-26 45,-26 22.5,0 22.5,3.5 45,26 h 4 V 0 H 90 C 30,22.5 22.5,30 0,90 Z"
            />
        )
    }

}

export default PeakCity;