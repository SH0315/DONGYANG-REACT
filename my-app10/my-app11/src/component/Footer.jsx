import React from 'react';
import { ThemeContext } from '../context/ThemeContext';
const Footer = () => {
  const {isDark, setIsDark, name} = React.useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black', 
      }}
    >
    <p>CopyRight {name} </p> 
     <button className="button" onClick={toggleTheme}>
       Dark Mode
     </button>
    </footer>
  );
};
export default Footer;