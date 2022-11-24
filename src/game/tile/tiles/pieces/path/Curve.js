import { Component } from "react";
import Path from "./Path";

class Curve extends Component {

    render() {
        return (
            <Path
                {...this.props}
                shape="M 50,90 C 50,62.5 27.5,40 0,40 h -4 v 10 h 4 c 22,0 40,18 40,40 v 4 h 10 z"
                tokenX={this.props.tokenX || -.45}
                tokenY={this.props.tokenY || .45}
            />
        )
    }

}

export default Curve;