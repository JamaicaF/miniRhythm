import Data from './data';
import Player from './player';
import ControlSurface from './control_surface';
import Sequence from './sequence';
import Modal from './modal';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const modal = new Modal();
  modal.closeModal();
  modal.openModal();

  const data = new Data();
  data.clearChannels();
  data.setDemo();

  const player = new Player(data);
  player.stopPlayback();
  player.resumePlayback();

  const controlSurface = new ControlSurface(canvas, ctx, data.channels);
  controlSurface.draw();
  controlSurface.buildClickHandlers();

  const sequence = new Sequence(canvas, ctx, data.sequence);
  sequence.draw();
});
