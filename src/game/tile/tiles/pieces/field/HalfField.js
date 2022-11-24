import { Component } from "react";
import Field from "./Field";

class HalfField extends Component {

    render() {
        return (
            <Field
                {...this.props}
                shape="m 0,0 h 45 v 90 H 0 Z"
                tokenX={this.props.tokenX || -1.075}
            />
        )
    }

}

export default HalfField;