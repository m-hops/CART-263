class MusicPlayerComponent extends Component {

  constructor(music = null, volume = 0.3) {

    super();

    this.music = music;
    this.volume = volume;
  }

  start() {
    super.start();

    this.startMusic();
  }

  end() {
    super.end();

    // this.stopMusic();
  }

  startMusic() {

    if (gameState.currentMusic == this.music){
      return;
    }

    if (gameState.currentMusic != null) {
      gameState.currentMusic.stop();
      gameState.currentMusic = null;
    }

    if (this.music != null) {
      this.music.setVolume(this.volume);
      this.music.loop();

      gameState.currentMusic = this.music;
    }
  }

  stopMusic() {

    if (gameState.currentMusic != null) {
      gameState.currentMusic.stop();
      gameState.currentMusic = null;
    }

  }

  playMusic(music) {
    this.stopMusic();

    this.music = music;

    this.startMusic();
  }
}
