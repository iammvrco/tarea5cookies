import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import VerCookies from './components/verCookies/verCookies'

import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={Home} />
      <Route path="/verCookies" component={VerCookies} />
    </Router>
  );
}

export default App;
