import { Component } from 'react';
import TileShape from '../tile-shape/TileShape';
import './TileCheckbox.scss';

class TileCheckbox extends Component {

    render() {
        return (
            <div
                className={`tile-checkbox${this.props.selected ? ' selected' : ''}`}
                onClick={this.props.onClick}
                style={this.props.style}
            >
                <TileShape>
                    {this.props.children}
                </TileShape>
            </div>
        )
    }
}

export default TileCheckbox;