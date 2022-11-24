import { Component } from "react";
import City from "./City";

class ThreeQuartersCity extends Component {

    render() {
        return (
            <City
                {...this.props}
                shape="m 45,64 c -22.5,0 -22.5,3.5 -45,26 h -4 v -94 h 98 v 94 H 90 C 67.071873,67.5 67.071873,64 45,64 Z"
            />
        )
    }

}

export default ThreeQuartersCity;