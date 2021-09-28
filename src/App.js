import "./App.scss";
import Countdown from "./components/Countdown/Countdown";
import logo from "./webimages/caravan.svg";

function App() {
  return (
    <div className="App">
      <Countdown
        timeTillDate=" 26 11 2021, 13:00 p"
        timeFormat="DD MM YYYY, h:mm a"
      />

      <img src={logo} className="caravan-logo" alt="logo" />
    </div>
  );
}

export default App;
