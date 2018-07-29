
class Sequence {
  constructor(canvas, ctx, sequence) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.sequence = sequence;
    this.stepHeight = 10;
    this.stepWidth = 40;
    this.draw = this.draw.bind(this);
    this.drawSequence = this.drawSequence.bind(this);
  }

  stepPosition(pos) {
    return {
      x: this.stepWidth + this.stepWidth * pos * 1.2,
      y: 240,
    };
  }

  drawStep(ctx, pos, color) {
    let position = this.stepPosition(pos);
    ctx.fillStyle = color;
    ctx.fillRect(position.x, position.y, this.stepWidth, this.stepHeight);
  }

  drawSequence(ctx, sequence) {
    sequence.forEach((step, pos) => {
      step = (step ? "rgb(238,0,100)" : "rgb(140,0,59)");
      this.drawStep(ctx,
              pos,
              step);
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.innerWidth, this.canvas.innerHeight);
    this.drawSequence(this.ctx, this.sequence);
    
    requestAnimationFrame(this.draw);
  }
}

export default Sequence;
