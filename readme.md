# miniRhythm README

## Background

Step sequencers are musical instruments that play rhythmic patterns. Users select the sounds they wish to play, and layer these sounds together within a short repeating interval. Sequencers have been a mainstay in electronic and computer music since the mid-twentieth century. _miniRhythm_ is a step sequencer inspired by classic drum machines.

[miniRhythm live site](http://www.jamaicafredericks.com/miniRhythm/)

## Functionality

The app incorporates key the elements of a step sequencer:

  - A sound source (in this case, a collection of mp3 samples)
  - A sequencer to trigger the sound source and manage musical timing
  - A control surface where users can modify audio output


  ![](./assets/minirhythm_full.jpg)

When playing the instrument, users primarily interact with a matrix of step buttons. Each matrix row corresponds to a different percussive sound, and each column represents a 1/16 of a musical measure. Along the bottom of the step button matrix is a sequencer display indicating playback timing. Users can also play, pause, and clear step sequencer playback.

## Architecture and Technologies

The app consists of a single page featuring all user controls, a link to toggle an instructional modal, and links to the GitHub repository.

The project was implemented with the following technologies:

  - JavaScript for handling fundamental app logic
  - [Tone.js](https://tonejs.github.io/) framework for web audio implementation
  - [Audacity](https://www.audacityteam.org/) audio editing software to normalize and compress mp3 samples
  - Canvas, CSS, and HTML5 for visualization
  - Webpack to bundle .js files

In addition to the entry file, project scripts include:

- `player.js` employs `Tone.js` framework architecture to maintain an internal player clock and trigger audio samples.  The `Tone.Players` class takes an object referencing sample files, which is then routed to the `AudioDestinationNode` master output. `Tone.Sequence` controls loop sequence scheduling through an event callback, event sequence, and internal clock. For each event in the sequence, the player fetches the audio files that correspond to current playback state.

```js
this.player = new Tone.Players({
  "clap": "./audio/clap128.mp3",
  "clhat": "./audio/808-chh128.mp3",
  "snare": "./audio/snare128.mp3",
  "kick": "./audio/808-kick128.mp3",
}, {
  "volume": -6,
}).toMaster();

this.loop = new Tone.Sequence((time, col) => {
  this.setSequence(col);
  for (let i = 0; i < this.channels.length; i++) {
    let step = this.channels[i].steps[col];
    if (step) {
      this.player.get(this.channels[i].channel).start(time, 0, '16n', 0);
    }
  }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
```

`data.js` manages both current playback and sequencer state. Playback state is stored as an array of channel objects, each containing a channel name reference and an array of steps, 16 booleans corresponding to whether a user has toggled a specific sound on or off at that position within the sequence. Similarly, sequencer state is an array of 16 booleans, toggled by the Tone sequencer as it iterates through the event sequence.

```js
class Data {
  constructor() {
    this.channels = [
      this.createChannel("clap"),
      this.createChannel("clhat"),
      this.createChannel("snare"),
      this.createChannel("kick"),
    ];
    this.createSequence();
    ...
  }

  createChannel(channel) {
    let steps = [];
    for (let i = 0; i < 16; i++) {
      steps.push(false);
    }
    return { channel, steps };
  }
```

`controlSurface.js` and `sequence.js` contain logic for rendering the instrument graphic user interface and sequence display in Canvas.

## Future Improvements

- Add greater control surface functionality: volume levels, tempo, and swing
- Include volume level controls for each individual audio element
- Increase number of audio sounds and audio effects (reverb, delay, panning) for greater playback variety

## Acknowledgements

All samples were sourced from [freesound.org](https://freesound.org/).
Favicon design by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect).
