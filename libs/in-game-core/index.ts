import { Bodies, Composite, Engine, Render, Body, World } from 'matter-js';

let currEngine: Engine | undefined;

export type PhysicsEngine = Engine;
export type PhysicsWorld = World;

export enum BodyType {
  Circle = 0,
  Rectangle = 1,
}

export const initEngine = (/** TODO: options */): PhysicsEngine => {
  if (currEngine) {
    throw new Error('"currEngine" already exist!');
  }

  // create an engine
  currEngine = Engine.create();

  // create two boxes and a ground
  const boxA = Bodies.rectangle(0, 0, 10, 10, {
    render: {
      opacity: 0.3,
    },
  });
  const boxB = Bodies.rectangle(400, 400, 10, 10, {
    render: {
      opacity: 0.3,
    },
  });
  const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

  // TODO:NOTE: when run server-side
  // const runner = Runner.create();
  // Runner.run(runner, currEngine);

  // TODO:NOTE: for client debug
  const render = Render.create({
    element: document.body,
    engine: currEngine,
    options: {
      background: '#bbb',
      wireframes: true,
      showDebug: true,
    },
  });
  Render.run(render);

  return currEngine;
};

export const destroyEngine = () => {
  if (!currEngine) {
    throw new Error('"currEngine" is undefined!');
  }
  Engine.clear(currEngine);
  currEngine = undefined;
};

export const addCircleBody = (physicsWorld: PhysicsWorld, x: number, y: number, r: number): number => {
  const circle = Bodies.circle(x, y, r);
  World.add(physicsWorld, circle);
  return circle.id;
};

export const addRectangleBody = (
  physicsWorld: PhysicsWorld,
  x: number,
  y: number,
  width: number,
  height: number,
): number => {
  // TODO:
  return NaN;
};

export const removeBody = (physicsWorld: PhysicsWorld, body: Body) => {
  World.remove(physicsWorld, body);
};
