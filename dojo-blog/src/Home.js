import { useState } from 'react';

const Home = () => {
const [name, setName] = useState('mario')
  const handleClick = (e) => setName('luigi')

  const handleClickWithParams = (name) => console.log('hello, ' + name)
  const handleClickWithParamsAndEvent = (name, e) => console.log('hello, ' + name, e.target)

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>

      <button onClick={() => handleClickWithParams('test')}>click me with params</button>
      <button onClick={(e) => handleClickWithParamsAndEvent('test2', e)}>click me with params and event</button>
    </div>
   );
}

export default Home;