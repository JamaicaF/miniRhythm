
class controlSurface {
  constructor(canvas, ctx, channels) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.channels = channels;
    this.padSize = 20;
    this.draw = this.draw.bind(this);
    this.drawChannels = this.drawChannels.bind(this);
    this.buildClickHandlers = this.buildClickHandlers.bind(this);
    this.togglePad = this.togglePad.bind(this);
  }

  togglePad(pos, col, row) {
    let pad = this.padPosition(col, row);
    return !(
      (pos.x < pad.x) ||
      (pos.y < pad.y) ||
      (pos.x > (pad.x + this.padSize)) ||
      (pos.y > (pad.y + this.padSize))
    );
  }

  buildClickHandlers() {
    canvas.addEventListener('click', (e) => {
      let pos = { x: e.clientX, y: e.clientY };
      this.channels.forEach((channel, row) => {
        channel.steps.forEach((play, col) => {
          if (this.togglePad(pos, col, row)) {
            channel.steps[col] = !play;
          }
        });
      });
    });
  }

  padPosition(col, row) {
    return {
      x: this.padSize + this.padSize * col * 2,
      y: this.padSize + this.padSize * row * 2
    };
  }

  drawPad(ctx, row, col, color) {
    let pos = this.padPosition(col, row);
    ctx.fillStyle = color;
    ctx.fillRect(pos.x, pos.y, this.padSize, this.padSize);
  }

  drawChannels(ctx, channels) {
    channels.forEach((channel, row) => {
      channel.steps.forEach((play, col) => {
        play = (play ? "green" : "black");
        this.drawPad(ctx,
                row,
                col,
                play);
      });
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.innerWidth, this.canvas.innerHeight);
    this.drawChannels(this.ctx, this.channels);

    requestAnimationFrame(this.draw);
  }
}

export default controlSurface;
