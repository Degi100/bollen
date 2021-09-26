import './App.scss';
import Countdown from './components/Countdown/Countdown'

function App() {
  
  return (

    <div className="App">
        <Countdown timeTillDate=" 26 11 2021, 13:00 p" timeFormat="DD MM YYYY, h:mm a" />

    </div>
  );
}

export default App;
