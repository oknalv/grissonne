import { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { wait } from "../../utils/utils";
import Message from "./Message";
import './MessageComponent.scss'

class MessageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null
        }
    }

    asyncSetState = async (newState) => {
        return new Promise((resolve) => this.setState(newState, resolve));
    }

    finishMessage = async () => {
        if(!this.state.message.keep){
            this.state.message.display = false;
            await this.asyncSetState({});
            await wait(Message.FADE_TIMEOUT);
            let message = this.state.message;
            await this.asyncSetState({ message: null });
            if(message.callback){
                message.callback();
            }
        }
    };

    componentDidUpdate = async (prevProps) => {
        if(this.props.message !== prevProps.message){
            await this.asyncSetState({ message: this.props.message });
            await wait(Message.FADE_TIMEOUT);
            if(this.props.message.timeout){
                await wait(this.props.message.timeout);
                await this.finishMessage();
            }
        }
    }

    render() {
        return (
            <CSSTransition
                classNames="message-container"
                timeout={{enter: Message.FADE_TIMEOUT, exit: Message.FADE_TIMEOUT}}
                in={this.state.message?.display}
                unmountOnExit
            >
                <div
                    className={`message-container${this.state.message ? '' : 'hidden'}`}
                    style={{
                        '--fade-timeout': `${Message.FADE_TIMEOUT}ms`,
                        '--background-color' : this.state.message?.backgroundColor || 'white'
                    }}
                >
                {
                    this.state.message && 
                    <div className="message">
                        {this.state.message.component}
                        {
                            !this.state.message.timeout && !this.state.message.keep &&
                            <button className="big-button" onClick={async () => await this.finishMessage()}>{this.state.message.buttonText || 'OK'}</button>
                        }
                    </div>
                }
                </div>
            </CSSTransition>
        );
    }

}

export default MessageComponent;