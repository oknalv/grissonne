import {Component} from 'react';
import './TokenComponent.scss';
import { CSSTransition } from 'react-transition-group';
import Figure from './Figure';
import Token from './Token';

class TokenComponent extends Component{

    render() {
        const degrees = this.props.token.rotation * 90 * Math.PI / 180;
        const xx = this.props.token.slotRef.current.cx.baseVal.value - 45;
        const yy = this.props.token.slotRef.current.cy.baseVal.value - 45;
        const x = xx * Math.cos(degrees) - yy * Math.sin(degrees) + 45;
        const y = xx * Math.sin(degrees) + yy * Math.cos(degrees) + 45;
        return (
            <CSSTransition
                classNames="token"
                timeout={{enter: Token.TIMEOUT, exit: Token.TIMEOUT}}
                in={this.props.token.display}
                unmountOnExit
            >
                <Figure
                    className="token"
                    color={this.props.token.player.color}
                    style={{
                        "--x": `${x}px`,
                        "--y": `${y}px`
                    }}
                />
            </CSSTransition>
        )
    };
}

export default TokenComponent;