import { Component } from "react";
import Field from "./Field";

class QuarterField extends Component {

    render() {
        return (
            <Field
                {...this.props}
                shape="m 0,45 h 45 v 45 H 0 Z"
                tokenX={this.props.tokenX || -.6}
                tokenY={this.props.tokenY || 1.1}
            />
        )
    }

}

export default QuarterField;