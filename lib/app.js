import Channels from './channels';
import Player from './player';
import ControlSurface from './control_surface';

import { padPosition } from './util';
import { padSize } from './constants';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const channels = new Channels();

  const player = new Player(channels);

  const controlSurface = new ControlSurface(canvas, ctx, channels);
  controlSurface.draw();
  controlSurface.buildClickHandlers();

});
