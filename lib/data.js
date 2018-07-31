import { demoBeats } from './demo_beats';

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
    this.clearSequence = this.clearSequence.bind(this);
    this.clearButton = document.getElementById('clear-button');
    this.demoButton = document.getElementById('demo-button');
    this.demoBeats = demoBeats;
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

  clearChannels() {
    this.clearButton.addEventListener('click', (e) => {
      this.channels.forEach((channel, i) => {
        this.channels[i] = this.createChannel(channel.channel);
      });
    });
  }

  clearSequence() {
    this.sequence.forEach((step, i) => {
      this.sequence[i] = false;
    });
  }

  setDemo() {
    this.demoButton.addEventListener('click', (e) => {
      this.demoBeats.forEach((channel, i) => {
        channel.steps.forEach((step, j) => {
          this.channels[i].steps[j] = step;
        });
      });
    });
  }
}

export default Data;
