import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Technology from './pages/Technology';
import Travel from './pages/Travel';

function App() {
  return (
    <Router>
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/photography">Photography</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/travel">Travel</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/photography" component={Photography} />
        <Route path="/technology" component={Technology} />
        <Route path="/travel" component={Travel} />
      </Switch>
    </Router>
  );
}

export default App;
