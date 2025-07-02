import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <h1 style={{ color: '#4CAF50' }}>Welcome to Home</h1>;
      case 'about':
        return <h1 style={{ color: '#2196F3' }}>About Us</h1>;
      case 'contact':
        return <h1 style={{ color: '#f44336' }}>Contact Us</h1>;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center' }}>
      <nav style={{ background: '#eee', padding: '10px' }}>
        <button onClick={() => handlePageChange('home')} style={buttonStyle}>Home</button>
        <button onClick={() => handlePageChange('about')} style={buttonStyle}>About</button>
        <button onClick={() => handlePageChange('contact')} style={buttonStyle}>Contact</button>
      </nav>
      <div style={{ marginTop: '30px' }}>
        {renderContent()}
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: '0 10px',
  padding: '8px 16px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default App;
// This code is a simple React application that allows users to navigate between three pages: Home, About, and Contact.
// Each page displays a different message with a unique color. The navigation is handled by updating the state with the selected page, and the content is rendered based on the current active page. The buttons are styled for better user experience.
// The application uses inline styles for simplicity, but you can also use CSS classes or styled-components for more complex styling.
// The code is structured to be easy to read and maintain, with clear separation of concerns for navigation and content rendering.
// The application is built using functional components and React hooks, which is the modern way to create React applications.