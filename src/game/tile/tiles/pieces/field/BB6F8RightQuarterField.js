import { Component } from "react";
import Field from "./Field";

class BB6F8RightQuarterField extends Component {

    render() {
        return (
            <Field
                {...this.props}
                shape="m 0,45 h 20 l 25,45 H 0 Z"
                tokenX={this.props.tokenX || -1.2}
                tokenY={this.props.tokenY || 1.2}
            />
        )
    }

}

export default BB6F8RightQuarterField;