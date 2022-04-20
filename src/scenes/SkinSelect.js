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

    let quasarButton = this.add.image(sizeX / 2, sizeY / 3, 'quasar').setInteractive();
    let skinName = this.skinsArray[this.selectedSkin];

    let skinplaceHolder = this.add.image(sizeX / 2, (sizeY * 2) / 3, "placeholder");
    skinplaceHolder.setScale(0.5);
    let current_image = this.add.image(400, 400, skinName).setDisplaySize(80, 80);
    var keyObj = this.input.keyboard.addKey('W');
    keyObj.on('up', () => this.scene.start("MainMenu"));

    //this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Coming very, very soon');

    quasarButton.on("pointerdown",
      () => {
        current_image.setVisible(false);
        if (this.selectedSkin < this.skinsArray.length - 1) {
          this.selectedSkin++;
        } else {
          this.selectedSkin = 0;
        }
        this.registry.set("selectedSkin", this.selectedSkin);
        current_image = this.add.image(400, 400, this.skinsArray[this.selectedSkin]).setDisplaySize(80, 80);;
        current_image.setVisible(true);
      }
    )


    //this.add.image(sizeX/2, sizeY/3, 'pog');
  }

  update() {

  }
}