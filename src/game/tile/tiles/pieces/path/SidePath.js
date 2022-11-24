import { Component } from "react";
import Path from "./Path";

class SidePath extends Component {

    render() {
        return (
            <Path
                {...this.props}
                shape="m 40,45 h 10 L 50,94 h -10 z"
                tokenY={this.props.tokenY || 1.075}
            />
        )
    }

}

export default SidePath;