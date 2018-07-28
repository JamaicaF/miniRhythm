class Data {
  constructor() {
    this.channels = [
      this.createChannel("kick"),
      this.createChannel("snare"),
      this.createChannel("clhat"),
      this.createChannel("clap"),
    ];
    this.createSequence();
    this.setSequence = this.setSequence.bind(this);
  }

  createChannel(channel) {
    let steps = [];
    for (let i = 0; i < 16; i++) {
      steps.push(false);
    }
    return { channel, steps };
  }

  createSequence(step) {
    let steps = [];

    for (let i = 0; i < 16; i++) {
      steps.push(false);
    }

    if (step) {
      steps[step] = true;
    }

    this.sequence = steps;
  }

  setSequence(step) {
    this.createSequence(step);
      console.log(this.sequence);
  }
}

export default Data;
