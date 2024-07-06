import React, { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleGreet = () => {
    if (userName) {
      setGreeting(`Hello, ${userName}!`);
    } else {
      setGreeting('Please enter your name.');
    }
  };

  return (
    <div>
      <h1>Greeting</h1>
      <label htmlFor="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" onChange={handleInputChange} />
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
}

export default App;

