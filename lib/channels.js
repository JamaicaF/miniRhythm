class Channels {
  constructor() {
    this.channels = [
      this.createChannel("kick"),
      this.createChannel("snare"),
      this.createChannel("clhat"),
      this.createChannel("clap"),
    ];
  }

  createChannel(channel) {
    let steps = [];
    for (let i = 0; i < 16; i++) {
      steps.push(false);
    }
    return { channel, steps };
  }
}

export default Channels;
