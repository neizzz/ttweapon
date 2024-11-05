import { addComponent, addEntity, IWorld } from 'bitecs';
import { Position } from '../../in-game-core/src/components/Position';

export class EntityFactory {
  static addPlayer(world: IWorld) {
    const player = addEntity(world);
    addComponent(world, Position, player);

    Position.x[player] = 100;
    Position.y[player] = 100;
  }

  static addEnemy(world: IWorld, level: number) {
    // TODO:
  }
}
