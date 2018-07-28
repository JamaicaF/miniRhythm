
class Sequence {
  constructor(canvas, ctx, sequence) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.sequence = sequence;
    this.padSize = 20;
    this.draw = this.draw.bind(this);
    this.drawSequence = this.drawSequence.bind(this);
  }

  stepPosition(pos) {
    return {
      x: this.stepSize + this.stepSize * pos * 2,
      y: this.stepSize + this.stepSize * 0 * 2,
    };
  }

  drawStep(ctx, pos, color) {
    let position = this.stepPosition(pos);
    ctx.fillStyle = color;
    ctx.fillRect(position.x, position.y, this.stepSize, this.stepSize);
  }

  drawSequence(ctx, sequence) {
    sequence.forEach((step, pos) => {
      step = (step ? "green" : "black");
      this.drawStep(ctx,
              pos,
              step);
    });
  }


  draw() {
    // this.ctx.clearRect(0, 0, this.canvas.innerWidth, this.canvas.innerHeight);
    this.drawSequence(this.ctx, this.sequence);

    requestAnimationFrame(this.draw);
  }
}

export default Sequence;
