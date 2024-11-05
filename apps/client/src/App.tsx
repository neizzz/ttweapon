import styled from 'styled-components';
import InGameScene from './scenes/InGameScene';

const AppContainer = styled.main`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <InGameScene />
    </AppContainer>
  );
}

export default App;
