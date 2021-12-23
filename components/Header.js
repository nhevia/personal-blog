import React from 'react';
import Github from '../public/icons/github.svg';
import Twitter from '../public/icons/twitter.svg';
import Sun from '../public/icons/sun.svg';
import Moon from '../public/icons/moon.svg';

const Header = ({ theme, setTheme }) => {
  function handleTheme() {
    theme === 'theme-light' ? setTheme('theme-dark') : setTheme('theme-light');
  }

  return (
    <div className="header-icons">
      {theme === 'theme-light' ? (
        <Sun onClick={handleTheme} />
      ) : (
        <Moon onClick={handleTheme} />
      )}
      <a target="_blank" href="https://github.com/nhevia" rel="noreferrer">
        <Github />
      </a>
      <a target="_blank" href="https://twitter.com/n_hevia" rel="noreferrer">
        <Twitter />
      </a>
    </div>
  );
};

export default Header;