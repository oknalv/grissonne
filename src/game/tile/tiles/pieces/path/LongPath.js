import { Component } from "react";
import Path from "./Path";

class LongPath extends Component {

    render() {
        return (
            <Path
                {...this.props}
                shape="m 40,-4 h 10 L 50,94 h -10 z"
            />
        )
    }

}

export default LongPath;