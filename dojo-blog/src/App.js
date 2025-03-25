import './App.css';

function App() {

  const title  = 'Welcome to the new blog';
  const likes = 50;
  const bDayInArr = [1993, 3, 26]
  const url = 'https://www.google.com'

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>{bDayInArr}</p>
        <p>{Math.random() * 10}</p>
        <a href={url}>Google</a>
      </div>
    </div>
  );
}

export default App;
