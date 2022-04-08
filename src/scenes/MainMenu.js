import { Scene } from "phaser";
import GameScene from "./GameScene";

export default class MainMenu extends Scene {
  constructor(config) {
    super({ key: "MainMenu" });
  }

  preload() {
    console.log("you are now on the main menu");
  }
init() {
  this.CONFIG = this.sys.game.CONFIG;
}
  create() {
    this.game.config.skinSelected ? console.log("true") : console.log("false");
    let selected;
    selected = this.game.config.skinSelected;
    selected ? console.log("true") : console.log("false");

    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;
    console.log(sizeX, sizeY);

    // this.createKeyboardInput();
    // this.createKeyboardInput();

    //this.input.on("pointerdown", () => this.scene.start("ShopTest")); //to be changed to game
    // this.goPlay();

    //BACKGROUND
    this.add.image(sizeX / 2, sizeY / 2, "bgintro");

    

    //TITLE
    this.add.image(sizeX - sizeX / 2, sizeY - (sizeY * 3) / 4, "title");

    //Buttons
    let buttonplay = this.add.image(sizeX - sizeX *2/ 3, sizeY - sizeY/2 + 50, "playButton").setInteractive();
    let buttonshop = this.add.image(sizeX - sizeX  *2/ 3, sizeY - sizeY/4, "shopButton").setInteractive();


    buttonplay.setScale(0.7);
    buttonshop.setScale(0.7);

    buttonplay.on('pointerdown', () => this.scene.start("GameScene"));

    buttonshop.on('pointerdown', () => this.scene.start("ShopTest")) ;

    //buttonplay.input.on('pointerdown' = () => this.scene.start("GameScene"));
    //currentSkin TO BE DYNAMICALLY CHANGES SOON
    
    let skinplaceHolder = this.add.image(sizeX * 3/4,(sizeY*2)/3, "placeholder");
    let skin = this.add.image(sizeX * 3/4,(sizeY*2)/3, selected ? "blankship" : "mainship").setInteractive();
    skin.on('pointerdown', () => this.scene.start("SkinSelect")) ;

    skinplaceHolder.setScale(0.5);
    skin.setScale(0.3);


    

  //   this.loadingText = this.add.text(
  //     sizeX / 2,
  //     sizeY / 2,
  //     "Click anywhere to start"
  //   );
  //   this.loadingText.setOrigin(0.5);
  }

  goPlay() {
    this.scene.start("GameScene");
  }
  
  goShop(){
    console.log("shop scene called");
    this.scene.start("ShopTest");
  }

  // createMouseInput() {
  //   this.input.on("pointerdown", () => this.scene.start("ShopTest"));
  // }
  // createKeyboardInput() {
  //   function handleKeyUp(e) {
  //     switch (e.code) {
  //       case "Enter":
  //         this.goShop();
  //         break;
  //     }
  //   }
  // }
}

//game title

//click to play
// let sizeY = this.game.canvas.height;
// let sizeX = this.game.canvas.width;

// this.add.image(0, 0,"title_pixel");

// this.add.image(0,0, "./assets/play_button.png");
//this.load.audio("Gio_Music", "path")
//this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Welcome to MetaSpace...');