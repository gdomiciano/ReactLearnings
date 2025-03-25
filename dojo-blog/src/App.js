import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  const title  = 'Welcome to the new blog';
  const likes = 50;
  const bDayInArr = [1993, 3, 26]
  const url = 'https://www.google.com'

  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Home />
      </main>
    </div>
  );
}

export default App;
