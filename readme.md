# miniRhythm

## Background

Step sequencers are musical instruments that play rhythmic patterns. Users select the sounds they wish to play, and layer these sounds together within a short repeating interval. Sequencers have been a mainstay in electronic and computer music since the mid-twentieth century. This app is inspired by classic late-twentieth century drum machines.

## Functionality & MVP

The app will incorporate key elements of a step sequencer:

  - Step buttons control musical timing and duration
  - The sequencer triggers a sound source
  - A control surface enables users to further modify audio output

Specifically, when playing the instrument, users will primarily interact with a grid of step buttons. The grid will be 4 rows tall (each row corresponding to a different percussive sound) and 16 buttons wide (each column represents a 1/16 of a musical measure). Along the bottom of the step button grid, will be a corresponding display to indicate sequencer playback timing. Users will also have the ability to play, pause, and clear sequencer playback, as well as to adjust volume levels and playback tempo.

## Wireframes

The app will consist of a single screen featuring all user controls, a link to toggle instructional modal(s), and links to the GitHub repository, my personal webpage, and my LinkedIn profile. Additional instrument playback functionality, including a further selection of playable audio sounds will be added later as bonus features.

![](https://i.imgur.com/mxkoDSD.jpg?1)

## Architecture and Technologies

The project will be implemented with the following technologies:
  - JavaScript for handling fundamental app logic
  - Tone.js library for web audio implementation
  - CSS, HTML5, and Canvas for visualization
  - Webpack to bundle .js files

In addition to the entry file, project scripts will include:

`player.js` where sample playback will be through either the `Tone.Player` or `Tone.Sampler`. The sound samples for audio playback will be mp3s from freesound.org (Creative Commons). `Tone.Sequence` will control playback scheduling.

`controlSurface.js` will contain logic for rendering the instrument graphic user interface and display. This may be refactored into further components as needed.

`modal.js` will contain informational text to assist users and give project context. 

## Implementation Timeline

**Day 1:** Setup npm packages and webpack, including installing Tone.js. Start writing entry file and `player.js` file. Learn more about Tone.js. _Primary goal:_ Have a solid app foundation, basic browser audio playback, and a clear plan for how to implement audio sample playback and sequencing.

**Day 2:** Select, download, and prep audio sample files for playback. Start writing `controlSurface.js`. _Primary goal:_ Have basic sample playback and looping functionality.

**Day 3:** Improve UI and visual styling with CSS and Canvas. Add any remaining control surface functionality (play, pause, clear, volume, and tempo). If time, add additional volume level controls for each audio element.

## Bonus Features

- Add audio effects options: reverb, delay, pitch-shifting, or panning
- Increase number of audio sounds for greater playback variety
