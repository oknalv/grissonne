import { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Avatar from '../../components/avatar/Avatar';
import { asTemplate } from '../../utils/utils';
import './TurnMessageComponent.scss';

class TurnMessageComponent extends Component {

    render() {
        return (
            <div className="turn-message">
                <span>{asTemplate(this.props.t('MESSAGES.turn'), { player: this.props.t(`PLAYERS.${this.props.player.id}`) })}</span>
                <Avatar player={this.props.player} height={100} width={100} />
            </div>
        );
    }

}

export default withTranslation()(TurnMessageComponent);