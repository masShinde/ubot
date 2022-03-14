import "./App.css";
import BotBox from "./Components/Bot/BotBox/BotBox";
import Introduction from "./Components/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <Introduction />
      <div className="bot-layout">
        <BotBox />
      </div>
    </div>
  );
}

export default App;
