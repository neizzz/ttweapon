import { defineSystem, defineQuery, enterQuery, exitQuery } from 'bitecs';

import { Position } from '../components/Position';
import { PhysicsBodies } from '../components/Body';
import { Rotation } from '../components/Rotation';
import { Velocity } from '../components/Velocity';
import { PhysicsEngine } from '../..';

const bodiesById = new Map<number, Body>();

export function createBodySystem(engine: PhysicsEngine, textures: string[]) {
  const query = defineQuery([Position, PhysicsBodies]);

  // create enter and exit queries
  const onQueryEnter = enterQuery(query);

  return defineSystem((world) => {
    // create matter sprite on enter
    const enterEntities = onQueryEnter(world);
    for (let i = 0; i < enterEntities.length; ++i) {
      const id = enterEntities[i];

      const x = Position.x[id];
      const y = Position.y[id];
      // const textureId = MatterSprite.texture[id];

      // Bodies.create;
      // matterSpritesById.set(id, sprite);
    }

    return world;
  });
}

export function createPhysicsSyncSystem() {
  // create query
  const query = defineQuery([Position, PhysicsBodies]);

  return defineSystem((world) => {
    // sync simulated values back into components
    const entities = query(world);
    for (let i = 0; i < entities.length; ++i) {
      const id = entities[i];
      const bodies = bodiesById.get(id);

      // if (!sprite) {
      //   continue;
      // }

      // Position.x[id] = sprite.x;
      // Position.y[id] = sprite.y;
    }

    return world;
  });
}

export function createMatterPhysicsSystem() {
  // create query
  const query = defineQuery([Rotation, Velocity, PhysicsBodies]);

  return defineSystem((world) => {
    const entities = query(world);
    for (let i = 0; i < entities.length; ++i) {
      const id = entities[i];
      // const sprite = bodiesById.get(id);

      // if (!sprite) {
      //   continue;
      // }

      // // set the rotation
      // sprite.angle = Rotation.angle[id];

      // // set the velocity
      // sprite.setVelocity(Velocity.x[id], Velocity.y[id]);
    }

    return world;
  });
}

// export function createMatterStaticSpriteSystem() {
//   // create query
//   const query = defineQuery([MatterSprite, MatterStaticSprite]);

//   // create enter query
//   const onQueryEnter = enterQuery(query);
//   const onQueryExit = exitQuery(query);

//   return defineSystem((world) => {
//     // loop through enter query entities
//     const enterEntities = onQueryEnter(world);
//     for (const id of enterEntities) {
//       const sprite = matterSpritesById.get(id);

//       if (!sprite) {
//         continue;
//       }

//       sprite.setStatic(true);
//     }

//     const exitEntities = onQueryExit(world);
//     for (const id of exitEntities) {
//       const sprite = matterSpritesById.get(id);

//       if (!sprite) {
//         continue;
//       }

//       sprite.setStatic(false);
//     }

//     return world;
//   });
// }
