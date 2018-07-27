import Player from './player';

class controlSurface {
  constructor() {
    this.canvas = document.getElementById('canvas').getContext('2d');
    this.padSize = 20;

    this.draw = this.draw.bind(this);
    this.drawChannels = this.drawChannels.bind(this);
    // this.drawPad = this.drawPad.bind(this);
  }

  padPosition(col, row) {
    return {
      x: this.padSize * col * 2,
      y: this.padSize * row * 2
    };
  }

  drawPad(canvas, col, row, color) {
    let position = this.padPosition(col, row);
    canvas.fillstyle = color;
    canvas.fillRect(position.x, position.y, this.padSize, this.padSize);
  }

  drawChannels(canvas, channels) {
    // debugger
    channels.forEach((channel) => {
      channel.steps.forEach((on, pad) => {
        this.drawPad(canvas,
                channel,
                pad,
                on ? "green" : "black");
      });
    });
  }

  createPlayerChannels() {
    const player = new Player();
    return player.channels;
  }

  draw() {
    this.channels = this.createPlayerChannels();
    // debugger

    this.drawChannels(this.canvas, this.channels);

    requestAnimationFrame(draw());
  }
}

export default controlSurface;
