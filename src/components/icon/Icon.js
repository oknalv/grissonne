import {Component} from 'react';
import './Icon.scss';

class Icon extends Component{

    render() {
        return (
            <div className="icon" style={{"--content": `"${this.props.icon}"`}}></div>
        )
    };
}

export default Icon;