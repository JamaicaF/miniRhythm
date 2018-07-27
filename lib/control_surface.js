import Player from './player';

class controlSurface {
  constructor() {
    this.canvas = document.getElementById('canvas').getContext('2d');
    // this.padSize = 20;
    // this.step = 0;
    // this.draw = this.draw.bind(this);
    this.drawChannels = this.drawChannels.bind(this);
    // this.createVoices = this.createVoices.bind(this);
    // this.channels = [];
  }


  //
  // padPosition(col, row) {
  //   return {
  //     x: this.padSize * col * 2,
  //     y: this.padSize * row * 2
  //   };
  // }
  //
  // drawPad(canvas, row, col, color) {
  //   padPosition = padPosition(col, row);
  //   canvas.fillstyle = color;
  //   canvas.fillRect(position.x, position.y, this.padSize, this.padSize);
  // }
  //
  drawChannels(canvas, player) {
    // debugger
    player.forEach((voice, channel) => {
      voice.steps.forEach((on, pad) => {
        drawPad(canvas,
                channel,
                pad,
                on ? "green" : "red");
      });
    });
  }

  createPlayer() {
    const player = new Player();
    return player.createPlayer();
  }

  draw() {
    // debugger
    this.player = this.createPlayer();

    this.drawChannels(this.canvas, this.player);

    requestAnimationFrame(draw);
  }
}

export default controlSurface;
