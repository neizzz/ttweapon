import { defineComponent, Types } from 'bitecs';

export const Position = defineComponent({
  /** assuming anchor is 0.5 */
  x: Types.f32,
  y: Types.f32,
});
