import styled from "styled-components";
import bg from './img/bg.jpg';
import { MainLayout} from "./styles/layout"; 
import Orb from "./components/Orb/Orb";
import Navigation from "./components/navigation/navigation";

function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb />
        <MainLayout>
         <Navigation />
        </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
   position: relative;
  width: 100%;
  height: 100vh;
  background-color: #DFFFD6; // Very Light Green background
  overflow: hidden;
`;

export default App;
