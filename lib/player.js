import Tone from 'tone';

class Player {
  constructor(props) {
    this.canvas = document.getElementById('canvas').getContext('2d');
    this.player = this.player();
    this.startPlayer = this.startPlayer.bind(this);
  }

  player() {
    const player = new Tone.Players({
      "kick": "http://127.0.0.1:8887/808-kick.mp3"
    }, {
      "volume": 0,
    }).toMaster();
    return player;
  }

  startPlayer() {
    debugger
    if (this.player.loaded) {
      debugger
      return this.player.get("kick").start();
    } else {
      this.startPlayer();
    }
  }
}

export default Player;
