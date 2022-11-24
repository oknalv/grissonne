import { Component } from "react";
import City from "./City";

class CrossingCity extends Component {
    
    render() {
        return (
            <City
                {...this.props}
                shape="m 0,0 c 22.5,22.5 26,22.5 26,45 0,22.5 -3.5,22.5 -26,45 v 4 h 90 v -4 C 67.5,67.5 64,67.5 64,45 c 0,-22.5 3.5,-22.5 26,-45 v -4 H 0 Z"
            />
        )
    }

}

export default CrossingCity;