class Data {
  constructor() {
    this.channels = [
      this.createChannel("clap"),
      this.createChannel("clhat"),
      this.createChannel("snare"),
      this.createChannel("kick"),
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
    let prevStep = step - 1;
    this.sequence[prevStep] = !this.sequence[prevStep];
    this.sequence[step] = !this.sequence[step];

    if (step === 0) {
      this.sequence[this.sequence.length - 1] = false;
    }
  }
}

export default Data;
