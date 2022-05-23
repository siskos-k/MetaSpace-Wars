import { Scene } from 'phaser';
import { GC } from '../GC';

export default class LoaderScene extends Scene {

  constructor(config) {
    super({ key: 'LoaderScene' });
  }

  init() {
    // this.nftArray = this.game.config.nftArray;
    let skinsArray = ['mainship'];
    this.nftArray = this.registry.get("nftArray");
    this.nftArray.forEach(nft => {
      skinsArray.push(nft.name);
    });


    this.registry.set("skinsArray", skinsArray);
    this.registry.set("selectedSkin", 0);
  }

  preload() {
    this.load.spritesheet('graphic', 'assets/spaceinvaders.png', {
      frameWidth: 13 * 4,
      frameHeight: 9 * 4
    });
    this.load.spritesheet('bomb', 'assets/bomb.png', {
      frameWidth: 3 * 4,
      frameHeight: 27//7*4
    });
    this.load.spritesheet('background_animated', 'assets/THISISATEST.png', {
      frameWidth: 800,
      frameHeight: 800,
    });

    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('bgintro', 'assets/bgintro.jpg');
    this.load.image('title', 'assets/title.png');
    this.load.image('background', 'assets/background.png');

    this.load.image('playButton', 'assets/PLAYBUTTON.png');
    this.load.image('shopButton', 'assets/ASSET_STORE.png');
    this.load.image('leaderboard', 'assets/LEADER.png');
    this.load.image('mainship', 'assets/main_ship.png');
    this.load.image('blankship', 'assets/blank_main_ship.png');

    this.load.image('placeholder', 'assets/placeHolder.png');

    this.load.image('quasar', 'assets/QUASAR.png');
    this.load.image('getskins', 'assets/skinselect.png');
    this.load.image('skinselect', 'assets/getskin.png');
    this.load.image('arrow_skin', 'assets/imageedit_3_3215926824.png');
    this.load.image('shopbg', 'assets/shopback.png');

    this.load.audio('explosion', 'assets/audio/explosion.wav');
    this.load.audio('shoot', 'assets/audio/shoot.wav');

    // preload all skins here as images
    this.nftArray.forEach(nft => {
      this.load.image(nft.name, nft.imgURL);
    });

    console.log("Loaded skins");
  }

  create() {
    this.animFactory();
    this.scene.start('MainMenu');
  }

  animFactory() {
    this.alienAnimFactory(GC.ALIEN_1);
    this.alienAnimFactory(GC.ALIEN_2);
    this.alienAnimFactory(GC.ALIEN_3);

    this.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('graphic', { start: 7, end: 7 }),
      frameRate: 1,
      repeat: 1
    });

    this.anims.create({
      key: 'rocket',
      frames: this.anims.generateFrameNumbers('graphic',
        { start: GC.ROCKET, end: GC.ROCKET }),
      frameRate: 0,
      repeat: 0
    });

    this.anims.create({
      key: 'bomb',
      frames: this.anims.generateFrameNumbers('bomb', { start: 0, end: 1 }),
      frameRate: 6,
      repeat: -1
    });
  }

  alienAnimFactory(alienType) {
    this.anims.create({
      key: 'alien' + alienType,
      frames: this.anims.generateFrameNumbers('graphic',
        { start: alienType, end: alienType + 1 }),
      frameRate: 2.5,
      repeat: -1
    });
  }
}
