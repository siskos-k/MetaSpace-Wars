import 'phaser';
import BootScene from './scenes/BootScene';
import LoaderScene from './scenes/LoaderScene';
import GameScene from './scenes/GameScene';
import MainMenu from './scenes/MainMenu';
import SkinSelect from './scenes/SkinSelect';
import { getNFTArray } from './getNFTArray';

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
  // add button handler
  document.getElementById("wallet_button").addEventListener("click", onWalletButtonClick)
}

async function onWalletButtonClick() {
  let connectedWallet = false;
  let publicKey = "";
  // check if there is a phantom wallet
  try {
    const { solana } = window;
    if (solana) {
      if (solana.isPhantom) {
        // attempt to connect
        console.log("Phantom wallet found!");
        const response = await solana.connect();
        connectedWallet = true;
        publicKey = response.publicKey.toString();
      }
    } else {
      alert("Solana wallet not found! Get a phantom wallet");
    }
  } catch (error) {
    console.log(error)
  }

  if (!connectedWallet) {
    return;
  }

  document.getElementById("wallet_button").style.visibility = "hidden";
  document.getElementById("button_container").style.visibility = "hidden";
  
  // if connected: start game with publickey
  getNFTArray(publicKey).then((nftArray) => {
    game = new Phaser.Game(config);
    game.registry.set("nftArray", nftArray);
    game.registry.set("publicKey", publicKey);
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
