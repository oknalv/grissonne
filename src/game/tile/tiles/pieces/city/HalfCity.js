import { Component } from "react";
import City from "./City";

class HalfCity extends Component {

    render() {
        return (
            <City
                {...this.props}
                shape="m 0,90 h -4 v -94 h 94 v 4 C 30,22.5 22.5,30 0,90 Z"
                tokenX={this.props.tokenX || -.5}
                tokenY={this.props.tokeY || -1}
            />
        )
    }

}

export default HalfCity;