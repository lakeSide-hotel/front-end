import React from 'react';

const Header = ({ title }) => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container posotion-relative">
        <h1 className="header-title text-center text-light top-0 end-0 bottom-0 start-0 position-absolute">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
