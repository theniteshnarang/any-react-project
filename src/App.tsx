import { Container } from "./layout";
import AnalogClock from "./Projects/AnalogClock/AnalogClock";

function App() {
  return (
    <Container>
      <div className="flex justify-center items-center h-screen">
        <AnalogClock />
      </div>
    </Container>
  );
}

export default App;
