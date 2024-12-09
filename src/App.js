import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import WithState from './WithState';
import WithoutState from './WithoutState';
import './App.css';
import Footer2 from './Footer2';

// Home component
const Home = () => (
    <div>
        <h2>Welcome to Our App</h2>
        <p>This is the home page of our application.</p>
    </div>
);

// About component
const About = () => (
    <div>
        <h2>About Us</h2>
        <p>Learn more about our application and its features.</p>
    </div>
);

const Header = () => <header><h2>This is the Header</h2></header>;

const Details = () => (
    <div>
        <h2>This is the Details</h2>
        <img src="profile.jpg" alt="Tharun Vankayala's"/>
        <p>Name: Tharun Vankayala</p>
        <p>Age: 21</p>
        <p>City: Hyderabad</p>
        <p>State: Telangana</p>
    </div>
    );

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/state-example">State Example</Link></li>
                        <li><Link to="/details">Details</Link></li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/state-example" element={
                        <div>
                            <Header />
                            <Footer />
                            
                            <h1>Understanding State in React</h1>
                            
                            {/* Component using useState */}
                            <WithState />
                            
                            {/* Component without useState */}
                            <WithoutState />                                                       
                        </div>
                    } />
                    <Route path="/details" element={<Details />} />
                </Routes>
                <Footer2 />
            </div>
        </Router>
    );
}

export default App;