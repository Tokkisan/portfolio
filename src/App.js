import React from 'react';
import './App.css';

function App() {
  // Function to scroll to the top of the page
const goToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
};

return (
    <div>
    <div className="topnav">
        <a href="#top"> Home </a>
        <a href="#projects"> Projects </a>
        <a href="https://github.com/Tokkisan" target="_blank" rel="noreferrer" style={{ float: 'right', paddingRight: '30px' }}>
        <i className="fa fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/aaron-lee-70b7b9239/" target="_blank" rel="noreferrer" style={{ float: 'right' }}>
        <i className="fa fa-linkedin"></i>
        </a>
    </div>

    <div className="bottombar" id="bottombar">
        <button onClick={goToTop} id="myBtn" className="top_button"> Top </button>
    </div>
    </div>
);
}

export default App;
