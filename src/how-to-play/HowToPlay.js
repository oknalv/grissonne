import { Component } from "react";
import { withTranslation } from "react-i18next";
import './HowToPlay.scss';
import { ReactComponent as Logo} from '../logo.svg';
import TileParts from "./tile_parts/TileParts";
import Expansions from "./expansions/Expansions";
import Icon from "../components/icon/Icon";

class HowToPlay extends Component {

    render() {
        const carcassonne = this.props.t("HOW_TO_PLAY.carcassonne").split("Carcassonne");
        const originalRules = this.props.t("HOW_TO_PLAY.originalRules").split("here");
        const pdfLang = this.props.i18n.resolvedLanguage === 'gl' ? 'es' :
            this.props.i18n.resolvedLanguage === 'pt' ? 'en' : this.props.i18n.resolvedLanguage;
        return (
            <div
                className="how-to-play"
                onClick={this.props.hide}
            >
                <button className="close round-icon-button">
                    <Icon icon="X" />
                </button>
                <div
                    className="content notebook"
                    onClick={(evt) => { evt.stopPropagation() }}
                >
                    <div className="title">
                        { this.props.t("HOW_TO_PLAY.title") }&nbsp;<Logo className="logo"/> !
                    </div>
                    <div>
                        { carcassonne[0] }<a href="https://cundco.de/en/boardgames/carcassonne-basic-games/444/carcassonne-big-box-de" target="_blank" rel="noreferrer">Carcassonne</a>{ carcassonne[1]}
                    </div>
                    <div>
                        { originalRules[0]}<a href={`/carcassonne_${pdfLang }.pdf`} target="_blank" rel="noreferrer">{ this.props.t("HOW_TO_PLAY.here") }</a>{ originalRules[1]}
                    </div>
                    <TileParts />
                    <Expansions />
                </div>
            </div>
        )
    }
}

export default withTranslation()(HowToPlay);