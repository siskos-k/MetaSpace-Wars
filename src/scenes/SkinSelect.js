import { Scene } from 'phaser';

export default class SkinSelect extends Scene {
  constructor(config) {
    super({ key: 'SkinSelect' });
  }

  preload(config) {
  }

  create() {
    this.skinsArray = this.registry.get("skinsArray");
    this.selectedSkin = this.registry.get("selectedSkin");
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;
    this.add.image(sizeX / 2, sizeY / 2, "shopbg");

    let nextSkin = this.add.image(sizeX * 3 / 4, (sizeY * 2) / 3, "arrow_skin").setScale(0.4).setInteractive();
    let previousSkin = this.add.image(sizeX / 4, (sizeY * 2) / 3, "arrow_skin").setScale(0.4).setInteractive();
    previousSkin.flipX = true;
    let quasarButton = this.add.image(sizeX / 2, sizeY / 4, 'skinselect').setInteractive();
    let skinName = this.skinsArray[this.selectedSkin];

    let skinplaceHolder = this.add.image(sizeX / 2, (sizeY * 2) / 3, "placeholder");
    skinplaceHolder.setScale(0.5);
    let current_image = this.add.image(400, 400, skinName).setDisplaySize(120, 120);
    var keyObj = this.input.keyboard.addKey('W');
    keyObj.on('up', () => this.scene.start("MainMenu"));

    //this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Coming very, very soon');

    quasarButton.on("pointerdown",
      () => {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      }
    )
    nextSkin.on("pointerdown",
      () => {
        current_image.setVisible(false);
        if (this.selectedSkin < this.skinsArray.length - 1) {
          this.selectedSkin++;
        } else {
          this.selectedSkin = 0;
        }
        this.registry.set("selectedSkin", this.selectedSkin);
        current_image = this.add.image(400, 400, this.skinsArray[this.selectedSkin]).setDisplaySize(120, 120);;
        current_image.setVisible(true);
      }
    )
    previousSkin.on("pointerdown",
      () => {
        current_image.setVisible(false);
        if (this.selectedSkin > 0) {
          this.selectedSkin--;
          console.log(this.selectedSkin);
        } else {
          this.selectedSkin = this.skinsArray.length - 1;
          console.log(this.selectedSkin);
        }
        this.registry.set("selectedSkin", this.selectedSkin);
        current_image = this.add.image(400, 400, this.skinsArray[this.selectedSkin]).setDisplaySize(120, 120);;
        current_image.setVisible(true);
      }
    )



    //this.add.image(sizeX/2, sizeY/3, 'pog');
  }

  update() {

  }
}
