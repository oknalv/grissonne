import { Component } from 'react';
import './TextMessageComponent.scss';

class TextMessageComponent extends Component {

    render() {
        return (
            <div className="text-message">
                {this.props.text}
            </div>
        )
    }
}

export default TextMessageComponent;