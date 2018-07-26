const Tone = require('tone');

class Player {
  constructor(props) {
    this.player = this.player();
    this.canvas = document.getElementById('canvas').getContext('2d');
  }


  // scheduleRepeat() {
  //   Tone.Transport.scheduleRepeate(time => {
  //     repeat(time);
  //   }, '8n');
  // }

  repeate(time) {
  }

  player() {
    const player = new Tone.Player("http://127.0.0.1:8887/808-kick.mp3");
    player.toMaster();
    player.autostart = true;
    // player.loop = true;

    // Tone.transport.start();
    // setTimeout(() => {
    //   Tone.Transport.stop();
    // }, 5000);
  }
}

export default Player;
