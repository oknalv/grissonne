import {Component} from 'react';
import { withTranslation } from 'react-i18next';
import Avatar from '../../components/avatar/Avatar';
import Figure from '../token/Figure';
import './PlayerCard.scss';

class PlayerCard extends Component{

    render() {
        return (
            <div
                className={`player-card${this.props.selected ? " selected": ""}`}
                key={this.props.player.id}
                style={{
                    "--player-color-h": this.props.player.color.h,
                    "--player-color-s": `${this.props.player.color.s}%`,
                    "--player-color-l": `${this.props.player.color.l}%`
                }}
            >
                <Avatar player={this.props.player} width={100} height={100} />
                <div className="player-data">
                    <div>
                        {this.props.t(`PLAYERS.${this.props.player.id}`)}
                    </div>
                    <div className="points-tokens">
                        <div>{this.props.player.points}</div>
                        <div className="tokens">
                            {
                                [...Array(this.props.player.tokens)].map((_, i) => {
                                    return (
                                        <Figure
                                                color={this.props.player.color}
                                                key={i}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default withTranslation()(PlayerCard);
