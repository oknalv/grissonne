import {Component} from 'react';
import './Points.scss';
import { CSSTransition } from 'react-transition-group';
import Figure from '../token/Figure';

class Points extends Component{

    constructor(props){
        super(props);
        this.state = {
            amount: 0,
            players: []
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.points !== null && prevProps.points !== this.props.points){
            this.setState({
                amount: this.props.points.amount,
                players: this.props.points.players
            })
        }
    }

    render() {
        return (
            <CSSTransition
                classNames="points"
                timeout={{enter: 500, exit: 500}}
                in={this.props.points}
                unmountOnExit
            >
                <div className="points" style={{"--scale": this.props.scale}}>
                    <div>
                        <div className="points-players">
                            {
                                this.state.players.map((player, i) => <Figure color={player.color} key={i} className="token"/>)
                            }
                        </div>
                        <div className="points-amount">
                            +{this.state.amount}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        )
    };
}

export default Points;
