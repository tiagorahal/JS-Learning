const team = {
  _players: [{
    firstName: 'Tiago',
    lastName: 'Aires',
    age: 27,
  },
  {
    firstName: 'Jessica',
    lastName: 'Munhe',
    age: 30
  },
  {
    firstName: 'Teobaldo',
    lastName: 'Cachorro',
    age: 90
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Eagles',
    teamPoints: 57,
    opponentPoints: 15
  },
  {
    opponent: 'Barabeis',
    teamPoints: 12,
    opponentPoints: 99
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    }
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent,
      teamPoints,
      opponentPoints
    }
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 48);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Titans', 100, 98);
team.addGame('Lessers', 30, 40);
team.addGame('Tupis', 39, 56);

console.log(team.players);
console.log(team.games);











