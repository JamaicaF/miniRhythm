import Tone from 'tone';

class Player {
  constructor(data) {
    this.channels = data.channels;
    this.setSequence = data.setSequence;
    this.clearSequence = data.clearSequence;

    this.player = new Tone.Players({
      "clap": "./audio/clap128.mp3",
      "clhat": "./audio/808-chh128.mp3",
      "snare": "./audio/snare128.mp3",
      "kick": "./audio/808-kick128.mp3",
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
    Tone.Transport.bpm.value = 120;

    this.playButton = document.getElementById('play-pause-button');
    this.togglePlayback = this.togglePlayback.bind(this);
  }

  togglePlayback() {
    if (this.loop.state === 'stopped') {
      this.loop.start();
    } else {
      this.loop.stop();
      this.clearSequence();
    }
  }

  triggerPlayback() {
    this.playButton.addEventListener('click', (e) => {
      this.togglePlayback();
    });
  }
}

export default Player;
