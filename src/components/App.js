// import '../App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './Nav'
import Home from './home'

function App() {
  return (
    <Router>
      <div >
          <NavBar />
          <Home />
        starter code
      </div>
    </Router>
  );
}

export default App;
