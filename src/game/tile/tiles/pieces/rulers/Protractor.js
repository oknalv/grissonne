import { Component } from "react";

class Protractor extends Component {

    render() {
        return (
            <g
                transform={`translate(${this.props.x * 30}, ${this.props.y * 30}) rotate(${(this.props.rotation || 0) * 90})`}
                style={{transformOrigin: "center"}}
            >
                <path
                    className="lined"
                    d="M 65,45 C 65,33.95431 56.045695,25 45,25 33.954305,25 25,33.95431 25,45 H 22.5 v 5 h 45 v -5 z M 60,45 c 0,-8.28427 -6.715729,-15 -15,-15 -8.284271,0 -15,6.71573 -15,15 h 10 c 0,-2.76142 2.238576,-5 5,-5 2.761424,0 5,2.23858 5,5 z"
                    style={{fill: "#00FF0055"}}
                />
                <path
                    className="lined"
                    d="m 25,45 2.500128,0 m -2.329057,-2.61135 2.497006,0.33022 m -1.986443,-2.89647 2.43396,0.65423 m -1.593184,-3.13108 2.314586,0.96067 m -1.157552,-3.3073 2.177645,1.25936 m -0.723985,-3.43443 1.999361,1.53634 m -0.274402,-3.50314 1.77405,1.77663 m 0.192754,-3.50159 1.527556,1.99367 m 0.647505,-3.44732 1.259355,2.18488 m 1.087271,-3.34191 0.960665,2.32389 m 1.516187,-3.16466 0.647507,2.42207 m 1.918745,-2.93264 0.327628,2.49959 m 2.282547,-2.67064 v 2.50011 m 2.610694,-2.32906 -0.33021,2.49701 m 2.895946,-1.98645 -0.653706,2.43396 m 3.131074,-1.59318 -0.960665,2.31458 m 3.306776,-1.15756 -1.259356,2.17764 m 3.434932,-0.72398 -1.53634,1.99936 m 3.503147,-0.2744 -1.776638,1.77457 m 3.501597,0.19224 -1.992077,1.53072 m 3.445734,0.64434 -2.184879,1.25936 m 3.341915,1.08727 -2.324406,0.96067 m 3.165181,1.51618 -2.422075,0.64751 m 2.932639,1.91874 -2.500106,0.32763 M 65,45 62.5,45"
                />
                <path
                    className="lined"
                    d="m 25,47.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5 m 2.5,-2.5 v 2.5"
                />
            </g>
        )
    }
}

export default Protractor;