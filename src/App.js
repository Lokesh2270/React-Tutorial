import React,{useState}from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import WithState from './WithState';
import WithoutState from './WithoutState';
import './App.css';
import Footer2 from './Footer2';
import Calculator from './Calculator';


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
        <p>Name: PENDYALA LOKESH `</p>
        <p>Age: 21</p>
        <p>City: Hyderabad</p>
        <p>State: Telangana</p>
    </div>
    );

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const theme = {
        light: {
            background: '#ffffff',
            text: '#333333',
            border: '#ccc',
            buttonBg: '#4CAF50',
            buttonText: 'white',
            inputBg: '#ffffff',
            inputBorder: '#ccc'
        },
        dark: {
            background: '#333333',
            text: '#ffffff',
            border: '#555555',
            buttonBg: '#1a8a1f',
            buttonText: '#ffffff',
            inputBg: '#444444',
            inputBorder: '#666666'
        }
    };

    const currentTheme = isDarkTheme ? theme.dark : theme.light;
 return (
        <Router>
            
            <div className="App" 
            style={{
                backgroundColor: currentTheme.background,
                color: currentTheme.text,
                minHeight: '100vh',
                transition: 'all 0.3s ease'
            }}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/state-example">State Example</Link></li>
                        <li><Link to="/details">Details</Link></li>
                    </ul>
                </nav>
                <div>
            <button 
                    onClick={() => setIsDarkTheme(!isDarkTheme)}
                    style={{
                        padding: '8px 15px',
                        backgroundColor: currentTheme.buttonBg,
                        color: currentTheme.buttonText,
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    {isDarkTheme ? '🌞 Light' : '🌙 Dark'}
                </button>
            </div>
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
                            <Calculator />
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