import 'phaser';
import BootScene from './scenes/BootScene';
import LoaderScene from './scenes/LoaderScene';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import SkinSelect from './scenes/SkinSelect';
import { getNFTArray } from './getNFTArray';

const publicKey = "4JRPncrtwtHLMfEdCqG2kzRNL7zz1h8yxr5f78gYmtF9";

let config = {
  type: Phaser.AUTO,
  parent: 'phaser-game',
  width: 800,
  height: 600,
  backgroundColor: "black",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [BootScene, LoaderScene, MainMenu, GameScene, SkinSelect],
};

// Bootstrap game
var game;
window.onload = function () {
  getNFTArray(publicKey).then((nftArray) => {
    game = new Phaser.Game(config);
    game.registry.set("nftArray", nftArray);
    window.focus();
    resizeGame();
    window.addEventListener("resize", resizeGame);
  });
}


// Cool resizing function that keeps aspect ratio
function resizeGame() {
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;
  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = (windowWidth / gameRatio) + "px";
  } else {
    canvas.style.width = (windowHeight * gameRatio) + "px";
    canvas.style.height = windowHeight + "px";
  }
}
