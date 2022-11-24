import { Component } from "react";
import Field from "./Field";

class BB6F8HalfField extends Component {

    render() {
        return (
            <Field
                {...this.props}
                shape="m 45,0 45,0 v 90 H 45 L 20,45 Z"
                tokenX={this.props.tokenX || .6}
                tokenY={this.props.tokenY || -1.1}
            />
        )
    }

}

export default BB6F8HalfField;