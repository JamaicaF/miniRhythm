import Data from './data';
import Player from './player';
import ControlSurface from './control_surface';

import { padPosition } from './util';
import { padSize } from './constants';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const data = new Data();
  const player = new Player(data);

  const controlSurface = new ControlSurface(canvas, ctx, data.channels);
  controlSurface.draw();
  controlSurface.buildClickHandlers();

  const sequence = new Sequence(data.sequence);

});
