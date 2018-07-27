import Player from './player';

class controlSurface {
  constructor() {
    this.canvas = document.getElementById('canvas').getContext('2d');
    this.padSize = 20;

    this.draw = this.draw.bind(this);
    this.drawChannels = this.drawChannels.bind(this);
  }

  padPosition(col, row) {
    return {
      x: this.padSize + this.padSize * col * 2,
      y: this.padSize + this.padSize * row * 2
    };
  }

  drawPad(canvas, row, col, color) {
    // debugger
    let position = this.padPosition(col, row);
    canvas.fillstyle = color;
    canvas.fillRect(position.x, position.y, this.padSize, this.padSize);
    // debugger
  }

  drawChannels(canvas, channels) {
    // debugger
    channels.forEach((channel, row) => {
      channel.steps.forEach((on, col) => {
        this.drawPad(canvas,
                row,
                col,
                on ? "green" : "black");
      });
    });
  }

  createPlayerChannels() {
    const player = new Player();
    return player.channels;
  }

  draw() {
    // debugger
    this.channels = this.createPlayerChannels();
    // debugger

    this.drawChannels(this.canvas, this.channels);

    requestAnimationFrame(this.draw());
  }
}

export default controlSurface;
