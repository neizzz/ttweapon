import { createWorld, addEntity, addComponent, IWorld, pipe } from 'bitecs';

import { Position } from '../../../in-game-core/src/components/Position';
import { Rotation } from '../../../in-game-core/src/components/Rotation';
import { Velocity } from '../../../in-game-core/src/components/Velocity';
import { Input } from '../components/Input';
import { Player } from '../../../in-game-core/src/components/Player';
// import {
//   createMatterPhysicsSyncSystem,
//   createMatterPhysicsSystem,
//   createMatterSpriteSystem,
//   createMatterStaticSpriteSystem,
// } from '~/systems/Matter';
// import { createPlayerSystem } from '~/systems/PlayerSystem';
// import { createSteeringSystem } from '~/systems/SteerSystem';
import { Application, Assets, Container, Renderer } from 'pixi.js';
import { initEngine, PhysicsEngine } from '../../../in-game-core';

enum Textures {
  TankBlue = 0,
  TankGreen = 1,
  TankRed = 2,
  TreeLarge = 3,
  TreeSmall = 4,
}
const TextureKeys = ['tank-blue', 'tank-green', 'tank-red', 'tree-large', 'tree-small'];

export default class SingleGame {
  private _stage: Container;
  private _engine: PhysicsEngine;
  private _ecsWorld?: IWorld;
  private _pipeline?: (world: IWorld) => void;
  private _afterPhysicsPipeline?: (world: IWorld) => void;

  constructor(stage: Container) {
    this._stage = stage;
  }

  init() {
    this._engine = initEngine();

    const onAfterUpdate = () => {
      if (!this._afterPhysicsPipeline || !this._ecsWorld) {
        return;
      }

      this._afterPhysicsPipeline(this._ecsWorld);
    };

    // this.matter.world.on(Phaser.Physics.Matter.Events.AFTER_UPDATE, onAfterUpdate);
    // this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
    //   this.matter.world.off(Phaser.Physics.Matter.Events.AFTER_UPDATE, onAfterUpdate);
    // });
  }

  async preload() {
    // this.load.image(TextureKeys[Textures.TankBlue], 'assets/tank_blue.png');
    // this.load.image(TextureKeys[Textures.TankGreen], 'assets/tank_green.png');
    // this.load.image(TextureKeys[Textures.TankRed], 'assets/tank_red.png');
    // this.load.image(TextureKeys[Textures.TreeLarge], 'assets/treeLarge.png');
    // this.load.image(TextureKeys[Textures.TreeSmall], 'assets/treeSmall.png');

    Assets.addBundle('player', {
      body: 'assets/body.png',
    });

    const playerAssets = await Assets.loadBundle('player');

    console.log('asset bundle:', playerAssets);
  }

  create() {
    // create world
    this._ecsWorld = createWorld();

    // create MatterSpriteSystem
    this._pipeline = pipe();
    // createMatterSpriteSystem(this.matter, TextureKeys),
    // createMatterStaticSpriteSystem(),
    // createPlayerSystem(this.cursors),
    // createSteeringSystem(5),
    // createMatterPhysicsSystem(),

    // this._afterPhysicsPipeline = pipe(createMatterPhysicsSyncSystem());
  }

  update(t: number, dt: number) {
    if (!this._ecsWorld || !this._pipeline) {
      return;
    }

    this._pipeline(this._ecsWorld);
  }
}
