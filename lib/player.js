import Tone from 'tone';

class Player {
  constructor() {
    this.channels = [
      this.createChannel("kick"),
      this.createChannel("snare"),
      this.createChannel("clhat"),
      this.createChannel("clap"),
    ];

    this.player = new Tone.Players({
      "kick": "http://127.0.0.1:8887/808-kick128.mp3",
      "snare": "http://127.0.0.1:8887/snare128.mp3",
      "clhat": "http://127.0.0.1:8887/808-chh128.mp3",
      "clap": "http://127.0.0.1:8887/clap128.mp3"
    }, () => {
      Tone.Transport.start();
    }).toMaster();
  }

  createChannel(channel) {
    let steps = [];
    for (let i = 0; i < 16; i++) {
      steps.push(false);
    }
    return { channel: channel, steps: steps };
  }

  createLoop() {

    const loop = new Tone.Sequence((time, col) => {
      let step = channels[i].steps[col];
      for (let i = 0; i < samples.length; i++) {
        if (step) {
          player.get(channels[i].channel).start(time, 0, '16n', 0);
        }
      }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
  }
}

export default Player;

// createAmplifier() {
//   const gain = new Tone.Gain();
// }

// createPlayer() {
//   const player = [
//     new Tone.Player("http://127.0.0.1:8887/808-kick.mp3"),
//   ];
//   player[0].toMaster();
//   player[0].autostart = true;
//   // voice.loop = true;
//   return player;
// }
