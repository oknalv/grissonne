import { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Avatar from '../../components/avatar/Avatar';
import './WinnerMessageComponent.scss';

class WinnerMessageComponent extends Component {

    render() {
        const winners = this.props.players.reduce((a, b) => {
            if(a[0]?.points > b.points) {
                return a;
            }
            else if(a[0]?.points < b.points){
                return [b]
            }
            a.push(b);
            return a;
        }, []);
        
        const stats = this.props.stats.getFormatted();
        return (
            <div className="winner-message">
                <div className="title">
                    { this.props.t(`MESSAGES.winner${winners.length > 1 ? "s" : ""}`)}
                </div>
                <div className="winners">
                    {
                        winners.map((winner) => {
                            return (                        
                                <div
                                    className="winner"
                                    key={winner.id}
                                    style={{
                                        "--winner-primary-color": winner.color.get(),
                                        "--winner-secondary-color": winner.color.getLightest(),
                                    }}
                                >
                                    <Avatar player={winner} height={150} width={150} />
                                    <div>{this.props.t(`PLAYERS.${winner.id}`)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="title">
                    { this.props.t(`MESSAGES.gameDevelopment`)}
                </div>
                <div className='chart notebook'>
                    <LineChart
                        data={stats}
                        width={700}
                        height={300}
                    >
                        <XAxis dataKey="tile" interval={"preserveStartEnd"} stroke="black" strokeWidth={3} width={100} padding={{left: 10, right: 10}}/>
                        <Tooltip
                            labelFormatter={(label) => `${this.props.t('STATS.tile')} ${label}`}
                            cursor={{ fill: "#EEEEEE"}}
                            formatter={(name, value, props) =>  [name, this.props.t(`PLAYERS.${value}`), props]}
                        />
                        <YAxis allowDecimals={false} stroke="black" strokeWidth={3} type="number" domain={["auto", "auto"]} width={100}/>
                        {
                            this.props.players.map((player) => {
                                return <Line dataKey={player.id} stroke={player.color.get()} dot={false} key={player.id} strokeWidth={3} strokeOpacity={.5}/>
                            })
                        }
                    </LineChart>
                </div>
            </div>
        )
    }

}

export default withTranslation()(WinnerMessageComponent);