import Tone from 'tone';

class Player {
  constructor(data) {
    this.channels = data.channels;
    this.setSequence = data.setSequence;

    this.player = new Tone.Players({
      "clap": "http://127.0.0.1:8887/clap128.mp3",
      "clhat": "http://127.0.0.1:8887/808-chh128.mp3",
      "snare": "http://127.0.0.1:8887/snare128.mp3",
      "kick": "http://127.0.0.1:8887/808-kick128.mp3",
    }, {
      "volume": -6,
    }).toMaster();

    this.loop = new Tone.Sequence((time, col) => {
      this.setSequence(col);
      for (let i = 0; i < this.channels.length; i++) {
        let step = this.channels[i].steps[col];
        if (step) {
          this.player.get(this.channels[i].channel).start(time, 0, '16n', 0);
        }
      }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");

    this.loop.start();
    Tone.Transport.start();
    Tone.Transport.bpm.value = 123;
  }

  // updateTransport() {
  //
  // }
}

export default Player;
