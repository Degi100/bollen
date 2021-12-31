import "./App.scss";
import Countdown from "./components/Countdown/Countdown";
// import logo from "./webimages/caravan.svg";

function App() {
  return (
    <div className="App">
    <h1>Happy New Year</h1>
      <Countdown
        timeTillDate=" 26 11 2021, 13:00 p"
        timeFormat="DD MM YYYY, h:mm a"
      />
<ul><li>
<a href="http://www.web.de">web.de</a>
</li></ul>
      </div>
      );
    }
    
    export default App;
    
    // <img src={logo} className="caravan-logo" alt="logo" />