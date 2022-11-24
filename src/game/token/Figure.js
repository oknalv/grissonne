import {Component} from 'react';
import './Figure.css';

class Figure extends Component{

    render() {
        return (
            <svg
                viewBox="0 0 12.25 23.5"
                className={`figure${this.props.className ? ` ${this.props.className}` : ""}`}
                style={this.props.style}
            >
                <g>
                    <path
                        className="lined"
                        d="m 4.25,23 -1.875,-7.5 H 0.5 c 0,0 0,-7.5 3.75,-7.5 0,0 -1.875,-1.67893 -1.875,-3.75 0,-2.07107 1.678932,-3.75 3.75,-3.75 2.071068,0 3.75,1.67892997 3.75,3.75 0,2.07107 -1.875,3.75 -1.875,3.75 3.75,0 3.75,7.45 3.75,7.5 H 9.8750011 l -1.875,7.5 z"
                        style={{fill: this.props.color.get()}}
                    />
                </g>
            </svg>
        )
    };
}

export default Figure;
