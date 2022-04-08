import { Scene } from 'phaser';
import LoaderScene from './LoaderScene';

export default class SkinSelect extends Scene {
  constructor(config) {
    super({ key: 'SkinSelect' });
  }

  preload () {
    ///console.log("You are now in the SHOP SCENE");
  }

  create () {
  
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;

    var keyObj = this.input.keyboard.addKey('W');
    keyObj.on('up', () => {this.scene.start("MainMenu");});


    this.add.image(sizeX/2, sizeY/4, 'skinselect');
    

    
    let skinplaceHolder = this.add.image(sizeX * 3/4,(sizeY*2)/3, "placeholder");
    let mainskin = this.add.image(sizeX * 3/4,(sizeY*2)/3, "mainship").setInteractive();

    let blankskinplaceHolder = this.add.image(sizeX * 1/4,(sizeY*2)/3, "placeholder");
    let blankskin = this.add.image(sizeX * 1/4,(sizeY*2)/3, "blankship").setInteractive();
    
    skinplaceHolder.setScale(0.5);
    blankskinplaceHolder.setScale(0.5);

     mainskin.on("pointerdown", () => {this.game.config.skinSelected = false; console.log("clickedMAIN");
      this.game.config.skinSelected ? console.log("true") : console.log("false");});


     blankskin.on("pointerdown", () => {this.game.config.skinSelected = true; console.log("clickedBLANK");
     this.game.config.skinSelected ? console.log("true") : console.log("false");});
    
    
    mainskin.setScale(0.3);
    blankskin.setScale(0.3);
    
  }
}