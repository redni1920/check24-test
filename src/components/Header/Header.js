import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src="/images/logo.png" />
      </a>
      <nav>
        <a href="#" className="button">vergliech</a>
        <a href="#" className="button">standorte</a>
        <a href="#" className="button">impressum</a>
      </nav>
    </header>
  );
};

export default Header;
