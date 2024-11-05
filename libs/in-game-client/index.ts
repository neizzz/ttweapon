import Game from './src/scenes/SingleGame';

import { Application, Graphics } from 'pixi.js';

let currApp: Application | undefined;

function checkCurrApp() {
  if (!currApp) {
    throw new Error('"currApp" is undefined!');
  }
}

export async function initAppInstance(options: { parentEl: HTMLElement }): Promise<void> {
  if (currApp) {
    throw new Error('"currApp" already exist!');
  }

  const { parentEl } = options;

  currApp = new Application();
  await currApp.init({
    resizeTo: parentEl,
    autoDensity: true,
    resolution: window.devicePixelRatio,
    antialias: true,
  });
  parentEl.appendChild(currApp.canvas);

  // FIXME: for test
  console.log(currApp.canvas);
  const width = parentEl.clientWidth;
  const height = parentEl.clientHeight;
  currApp.stage.addChild(new Graphics().rect(0, 0, width, height).fill(0xff0000));
  currApp.stage.addChild(new Graphics().rect(5, 5, width - 10, height - 10).fill(0x440000));
  currApp.stage.addChild(new Graphics().circle(width / 2, height / 2, 50).fill(0x006600));
}

export function destroyAppInstance(): void {
  checkCurrApp();
  currApp?.destroy();
}

export function startApp() {
  checkCurrApp();

  let elapsed = 0.0;
  currApp?.ticker.add((ticker) => {
    elapsed += ticker.deltaTime;
  });
}

export function stopApp() {
  checkCurrApp();
  currApp?.ticker.stop();
}
