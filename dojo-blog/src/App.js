import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {

  const title  = 'Welcome to the new blog';
  const likes = 50;
  const bDayInArr = [1993, 3, 26]
  const url = 'https://www.google.com'

  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
