import { Scene } from 'phaser';
import LoaderScene from './LoaderScene';

export default class ShopTest extends Scene {
  constructor(config) {
    super({ key: 'ShopTest' });
  }

  preload () {
    ///console.log("You are now in the SHOP SCENE");
  }

  create () {
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;

    var keyObj = this.input.keyboard.addKey('W');
    keyObj.on('up', () => this.scene.start("MainMenu"));

    this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Coming very, very soon');
    this.loadingText.setOrigin(0.5);

    this.add.image(sizeX/2, sizeY/3, 'quasar');

    
    //this.add.image(sizeX/2, sizeY/3, 'pog');
    console.log("You are now in the SHOP SCENE");

  }
}