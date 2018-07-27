import Player from './player';
import ControlSurface from './control_surface';

document.addEventListener("DOMContentLoaded", () => {
  const player = new Player();
  // player.createPlayer();
  debugger
  const controlSurface = new ControlSurface(player);
  controlSurface.draw();
});
