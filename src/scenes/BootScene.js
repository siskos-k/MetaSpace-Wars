import { Scene } from 'phaser';

export default class BootScene extends Scene {

  constructor(config) {
    super({ key: 'BootScene' });
  }

  preload() {
    console.log("this is the boot scene");
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;

    this.load.spritesheet('loading', 'assets/loadingGIF.png', {
      frameWidth: 800,
      frameHeight: 600,
    });


    this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Loading...', { color: 'white' });
    this.loadingText.setOrigin(0.5);

    this.load.spritesheet('MainMenuBg', 'assets/ANIMATEDBGG.png', {
      frameWidth: 800,
      frameHeight: 600,
    });
  }

  create() {

    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;


    // this.MainMenuBg = this.add.sprite(sizeX / 2, sizeY / 2, 'MainMenuBg');

    // this.anims.create({
    //   key: "MainMenu",
    //   frames: this.anims.generateFrameNumbers('MainMenuBg', { start: 10, end: 470 }),
    //   frameRate: 50,
    //   repeat: -1
    // });
    // this.MainMenuBg.play("MainMenu");


    this.scene.start('LoaderScene');

  }
}