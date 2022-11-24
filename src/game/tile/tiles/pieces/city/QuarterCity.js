import { Component } from "react";
import City from "./City";

class QuarterCity extends Component {

    render() {
        return (
            <City
                {...this.props}
                shape="m 0,0 c 22.5,22.5 26,22.5 26,45 0,22.5 -3.5,22.5 -26,45 h -4 v -90 z"
                tokenX={this.props.tokenX || -1.075}
            />
        )
    }

}

export default QuarterCity;