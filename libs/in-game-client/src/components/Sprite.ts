import { Types, defineComponent } from 'bitecs';

export const Sprites = defineComponent({
  textureTypes: [Types.ui8],
  /** offset coordinate from parent container */
  offsetXs: [Types.ui8],
  offsetYs: [Types.ui8],
});
