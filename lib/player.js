import Tone from 'tone';

class Player {
  constructor(props) {
    this.player = this.createPlayer.bind(this);
  }

  createAmplifier() {
    const gain = new Tone.Gain();
  }

  createPlayer() {
    debugger
    const player = [
      new Tone.Player("http://127.0.0.1:8887/808-kick.mp3"),
    ];
    player[0].toMaster();
    player[0].autostart = true;
    // voice.loop = true;
    return player;
  }
}

export default Player;

// const players = new Tone.Players({
//   "kick": "http://127.0.0.1:8887/808-kick.mp3"
// }, {
//   "volume": 0,
// }, () => {
//     players.get("kick").start()
// }).toMaster();
// return players;

// startPlayer() {
//   if (this.player.loaded) {
//   }
// }
