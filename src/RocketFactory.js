import { GC } from './GC';

class RocketFactory {
  create(scene) {
    
    let sizeX = scene.game.canvas.width;
    let sizeY = scene.game.canvas.height;
  
    // let Gameskin = scene.add.image(sizeX/2, sizeY - sizeY/6, scene.game.config.skinSelected ? "blankship" : "mainship");
    // Gameskin.setScale(0.1);

    
    let rocket = scene.physics.add.sprite(400, 500, (scene.registry.get("skinsArray")[scene.registry.get("selectedSkin")]))
      .setImmovable(true);

    rocket.setCollideWorldBounds(true);
    rocket.body.onWorldBounds = true;
    rocket.body.world.on('worldbounds', function(body) {
      if (body.gameObject === this) {
        this.setActive(false);
      }
    }, rocket);

    rocket.setDisplaySize(40,40)
    return rocket;
  }
}

const rocketFactory = new RocketFactory();

export default rocketFactory;
