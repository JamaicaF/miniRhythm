const Tone = require('tone');

class Player {
  constructor(props) {
    this.synth = this.synth();

    this.setTimeout = this.setTimeout.bind(this);
    this.scheduleRepeat = this.scheduleRepeat.bind(this);
  }


  // scheduleRepeat() {
  //   Tone.Transport.scheduleRepeate(time => {
  //     repeat(time);
  //   }, '8n');
  // }

  repeate(time) {
  }

  synth() {
    const synth = new Tone.Synth();
    synth.toMaster();
    synth.triggerAttackRelease('C4', '8n', this.scheduleRepeat);
    Tone.transport.start();
    setTimeout(() => {
      Tone.Transport.stop();
    }, 5000);
  }
}

export default Player;
