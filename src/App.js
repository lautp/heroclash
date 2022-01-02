import './App.css';
import Login from './components/Login.js'
import Navbar from './components/Navbar.js';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Team />
    </div>
  );
}

export default App;
