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
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;
    console.log(sizeX, sizeY);

    // this.createKeyboardInput();
    // this.createKeyboardInput();
    this.input.on("pointerdown", () => this.scene.start("GameScene"));
    // this.goPlay();
    //BACKGROUND
    this.add.image(sizeX / 2, sizeY / 2, "bgintro");

    //TITLE
    this.add.image(sizeX - sizeX / 2, sizeY - (sizeY * 2) / 3, "title");

    this.loadingText = this.add.text(
      sizeX / 2,
      sizeY / 2,
      "Click anywhere to start"
    );
    this.loadingText.setOrigin(0.5);
  }
  goPlay() {
    this.scene.start("GameScene");
  }

  createMouseInput() {
    this.input.on("pointerdown", () => this.scene.start("GameScene"));
  }
  createKeyboardInput() {
    function handleKeyUp(e) {
      switch (e.code) {
        case "Enter":
          this.goPlay();
          break;
      }
    }
  }
}

//game title

//click to play
// let sizeY = this.game.canvas.height;
// let sizeX = this.game.canvas.width;

// this.add.image(0, 0,"title_pixel");

// this.add.image(0,0, "./assets/play_button.png");
//this.load.audio("Gio_Music", "path")
//this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Welcome to MetaSpace...');