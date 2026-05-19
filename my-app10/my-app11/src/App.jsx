/* App.jsx */
import { useState } from 'react';
import './index.css';
import Page from './component/page';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState('');
  
  
 
  return (
    <ThemeContext.Provider value = {{isDark ,setIsDark, name, setName }}>
      <div className=' App'>
        <Page/>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;