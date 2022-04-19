import { Scene } from 'phaser';
import LoaderScene from './LoaderScene';

const ArrayURL = ['http://labs.phaser.io/assets/pics/sukasuka-chtholly.png',
 'https://labs.phaser.io/assets/pics/spaceship.png']

const numberOfSkins = 2;

let selectedSkin = 0;

export default class ShopTest extends Scene {
  constructor(config) {
    super({ key: 'ShopTest' });
  }

  preload (config) {
    ///console.log("You are now in the SHOP SCENE");\\
    
    //let numberOfNFTs = 2;
    console.log("test" + numberOfSkins)

    //mapping test
    for(var i=0; i<numberOfSkins;i++)
    {
    this.load.image("skin"+i, ArrayURL[i])
    }

  }

  create () {
    let sizeY = this.game.canvas.height;
    let sizeX = this.game.canvas.width;

    let quasarButton = this.add.image(sizeX/2, sizeY/3, 'quasar').setInteractive();


    
    let skinplaceHolder = this.add.image(sizeX /2,(sizeY*2)/3, "placeholder");
    skinplaceHolder.setScale(0.5);
    let current_image = this.add.image(400, 300, 'skin'+selectedSkin).setDisplaySize(80,80);
    let prev;
    var keyObj = this.input.keyboard.addKey('W');
    keyObj.on('up', () => this.scene.start("MainMenu"));

    //this.loadingText = this.add.text(sizeX / 2, sizeY / 2, 'Coming very, very soon');
    
    
    

    //testing skin change
   

    quasarButton.on("pointerdown",
    () => {
      current_image.setVisible(false);
      if(selectedSkin<numberOfSkins-1)
      {
        selectedSkin++;
       // current_image.kill();
        current_image = this.add.image(400, 300, 'skin'+selectedSkin).setDisplaySize(80,80);;
        current_image.setVisible(true);
        
      }
      else selectedSkin=0;
     // current_image.kill();
      current_image.setVisible(false);
      current_image = this.add.image(400, 300, 'skin'+selectedSkin).setDisplaySize(80,80);;
      current_image.setVisible(true);
    }
    )
    
    
    //this.add.image(sizeX/2, sizeY/3, 'pog');
    console.log("You are now in the SHOP SCENE");

  }
  update()
  {

  }
}