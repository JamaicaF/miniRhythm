import Player from './player';
import ControlSurface from './control_surface';

document.addEventListener("DOMContentLoaded", () => {
  const player = new Player();

  const controlSurface = new ControlSurface(player);
  controlSurface.draw();
  controlSurface.handleClick();
});
