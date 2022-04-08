import { Scene } from 'phaser';
import LoaderScene from './LoaderScene';

export default class BootScene extends Scene {

  constructor(config) {
    super({ key: 'BootScene' });
  }

  preload () {
    console.log("You are now in the BOOT SCENE");
    
  }

  create () {
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;

    this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Loading...');
    this.loadingText.setOrigin(0.5);

    this.scene.start('LoaderScene');
  }
}