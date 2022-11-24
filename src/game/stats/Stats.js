class Stats {
    constructor(players) {
        this.players = players.map((p) => new PlayerStats(p));
    }

    setPoints() {
        for(const player of this.players) {
            player.setPoints();
        }
    }

    getFormatted() {
        const formatted = [];
        for(let i = 0; i < this.players[0].points.length; i++) {
            formatted.push({...this.players.reduce((a, b) => ({...a, [b.player.id]: b.points[i]}), {}), tile: i + 1});
        }
        return formatted;
    }
}

class PlayerStats {
    constructor(player) {
        this.player = player;
        this.points = [];
    }

    setPoints() {
        this.points = [...this.points, this.player.points]
    }
}

export default Stats;
