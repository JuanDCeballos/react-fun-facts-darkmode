import Navbar from './components/Navbar';
import Main from './components/Main';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className='main-container'>
      <div className='card'>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleMode} />
        <Main darkMode={darkMode} />
      </div>
    </div>
  );
};

export default App;
