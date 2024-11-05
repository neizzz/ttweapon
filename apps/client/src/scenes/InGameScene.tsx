import { initAppInstance } from '@ttweapon/in-game-client';
import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const InGameContainer = styled.div`
  width: 100%;
  height: 100%;
`;

type Props = {
  width: number;
  height: number;
};

const InGameScene = (/** TODO: props: Props */) => {
  const parentElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initAppInstance({ parentEl: parentElRef.current as HTMLDivElement });
  }, []);

  return <InGameContainer ref={parentElRef} />;
};

export default InGameScene;
