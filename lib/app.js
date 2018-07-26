import Player from './player';
import ControlSurface from './control_surface';

document.addEventListener("DOMContentLoaded", () => {
  // // debugger
  // const player = new Player();
  // player.createPlayer();

  const controlSurface = new ControlSurface();
  controlSurface.draw();
});
