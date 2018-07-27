import Tone from 'tone';

class Player {
  constructor() {
    this.player = this.createPlayer.bind(this);
  }

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

  createPlayer() {
    // debugger
    const player = new Tone.Players({
      "kick": "http://127.0.0.1:8887/808-kick.mp3",
      "snare": "http://127.0.0.1:8887/snare128.mp3",
      "clshat": "http://127.0.0.1:8887/808-chh128.mp3",
      "clap": "http://127.0.0.1:8887/clap128.mp3"
    }, {
      "volume": 0,
    }).toMaster();
    return player;
  }

  // createChannels(voices) {
  //   this.voices.forEach((voice, channel) => {
  //     channels.push(createChannel(voice, channel));
  //   });
  // }
  //
  // createChannel(voice, channel) {
  //   let steps = [];
  //   for (let i = 0; i < 16; i++) {
  //     steps.push(false);
  //   }
  //
  //   return { channel: channel, steps: steps, voice: voice };
  // }

  createLoop() {
    const samples = ["kick", "snare", "clshat", "clap"];
    const loop = new Tone.Sequence((time, col) => {
      // let  ;
      for (let i = 0; i < samples.length; i++) {
        // if () {
        //   player.get(samples[i]).start()
        // }
      }
    });
  }
}

export default Player;
