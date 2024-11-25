import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ParkingSpace from './Components/ParkingSpace';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <ParkingSpace/>
      <SignUp/>

    </div>
  );
}
export default App;
