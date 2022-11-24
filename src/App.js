import { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './App.scss';
import Icon from './components/icon/Icon';
import GameContainer from './game/GameContainer';
import HowToPlay from './how-to-play/HowToPlay';
import { ReactComponent as Logo} from './logo.svg';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            play: false,
            howToPlay: false
        }
        this.languages = ['en', 'es', 'gl', 'pt'];
        this.languageNames = { en: "English", es: "Español", gl: "Galego", pt: "Português"};
    }

    showHowToPlay = () => {
        this.setState({ howToPlay: true });
    }

    hideHowToPlay = () => {
        this.setState({ howToPlay: false });
    }

    render() {
        return (
            <>
            {
                this.state.howToPlay &&
                <HowToPlay
                    hide={() => { this.hideHowToPlay() }}
                />
            }
            {
                !this.state.play &&
                <div className='welcome-page notebook'>
                    <Logo className='logo'/>
                    <div className='buttons'>
                        <button
                            className="big-button"
                            onClick={() => {
                                this.setState({ play: true });
                            }}
                        >
                            <Icon icon="⏵"/>
                            <span>{ this.props.t('WELCOME.play')}</span>
                        </button>
                        <button
                            className="big-button secondary"
                            onClick={() => { this.showHowToPlay() }}
                        >
                            <Icon icon="?"/>
                            <span>{ this.props.t('WELCOME.howToPlay')}</span>
                        </button>
                        <button
                            className="big-button secondary"
                            onClick={ () => {
                                let nextLanguageIndex = this.languages.indexOf(this.props.i18n.resolvedLanguage) + 1;
                                nextLanguageIndex = nextLanguageIndex === this.languages.length ? 0 : nextLanguageIndex;
                                this.props.i18n.changeLanguage(this.languages[nextLanguageIndex]);
                            }}
                        >
                            <span
                                className="flag"
                                style={{
                                    backgroundImage : `url(img/${this.props.i18n.resolvedLanguage}.svg)`
                                }}
                                alt={this.languageNames[this.props.i18n.resolvedLanguage]}
                            >
                            </span>
                            <span>
                                { this.languageNames[this.props.i18n.resolvedLanguage] }
                            </span>
                        </button>
                    </div>
                </div>
            }
            {
                this.state.play &&
                <GameContainer
                    showHowToPlay={() => { this.showHowToPlay() }}
                />
            }
            </>
        );
    }

};

export default withTranslation()(App);
