const playerOne = {
    name: "Ruben",
    points: 0,
    symbol:"X",
    playedGames: 0
}
console.log(playerOne);

class Player
{
    constructor(name,symbol) {
     this.name = name;
     this.symbol = symbol;
     this.points = 0;
     this.playedGames = 0;   
    };

    addPoints(pointsAdd) {
      this.points += pointsAdd;
    }

    addGamesPLayed() {
        this.playedGames += 1;
    }
}


const pOne = new Player("Henk", "X");
const pTwo = new Player("Faruk","O");
pOne.addPoints(30); 
console.log(pOne);

