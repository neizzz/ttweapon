import { defineComponent, Types } from 'bitecs';

export const PhysicsBodies = defineComponent({
  /** TODO:
   * bodies들을 하나로 인식해서 동시에 여러개의 충돌이 일어나더라도 한 번만 충돌 처리가 발생해야 함.
   */
  /** body id list */
  bodyTypes: [Types.ui8, 2],
});

// export const StaticBody = defineComponent();
