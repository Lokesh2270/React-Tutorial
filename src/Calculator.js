import React, { useState } from 'react';

const Calculator = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [numbers, setNumbers] = useState({
        num1: '',
        num2: ''
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Theme styles
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log('Before Update - Previous State:', numbers);
        console.log('Changing field:', name);
        console.log('New value:', value);

        setNumbers(prev => {
            console.log('Inside setNumbers - prev state:', prev);
            console.log('What ...prev spreads:------->', {...prev});
            
            const newState = {
                ...prev,
                [name]: value
            };
            console.log('New state after update:', newState);
            return newState;
        });

        setError('');
        setSuccess('');
    };

    const validateInputs = () => {
        if (!numbers.num1 || !numbers.num2) {
            setError('Please fill in both numbers');
            return false;
        }
        if (isNaN(numbers.num1) || isNaN(numbers.num2)) {
            setError('Please enter valid numbers');
            return false;
        }
        return true;
    };

    const handleAdd = () => {
        if (!validateInputs()) return;
        const sum = parseFloat(numbers.num1) + parseFloat(numbers.num2);
        setResult(sum);
        setSuccess('Addition successful!');
        setError('');
    };

    const handleSubtract = () => {
        if (!validateInputs()) return;
        const difference = parseFloat(numbers.num1) - parseFloat(numbers.num2);
        setResult(difference);
        setSuccess('Subtraction successful!');
        setError('');
    };

    return (
        <div style={{ 
            border: `1px solid ${currentTheme.border}`, 
            padding: '20px', 
            borderRadius: '8px',
            maxWidth: '400px',
            margin: '20px auto',
            backgroundColor: currentTheme.background,
            color: currentTheme.text,
            transition: 'all 0.3s ease'
        }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '20px'
            }}>
                <h2 style={{ margin: 0 }}>Calculator with Feedback</h2>
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
            
            <div style={{ marginBottom: '15px' }}>
                <input
                    type="text"
                    name="num1"
                    value={numbers.num1}
                    onChange={handleInputChange}
                    placeholder="Enter first number"
                    style={{ 
                        padding: '8px',
                        marginRight: '10px',
                        width: '150px',
                        backgroundColor: currentTheme.inputBg,
                        color: currentTheme.text,
                        border: `1px solid ${currentTheme.inputBorder}`,
                        borderRadius: '4px'
                    }}
                />
                <input
                    type="text"
                    name="num2"
                    value={numbers.num2}
                    onChange={handleInputChange}
                    placeholder="Enter second number"
                    style={{ 
                        padding: '8px',
                        width: '150px',
                        backgroundColor: currentTheme.inputBg,
                        color: currentTheme.text,
                        border: `1px solid ${currentTheme.inputBorder}`,
                        borderRadius: '4px'
                    }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <button 
                    onClick={handleAdd}
                    style={{
                        padding: '8px 15px',
                        marginRight: '10px',
                        backgroundColor: currentTheme.buttonBg,
                        color: currentTheme.buttonText,
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Add
                </button>
                <button 
                    onClick={handleSubtract}
                    style={{
                        padding: '8px 15px',
                        backgroundColor: currentTheme.buttonBg,
                        color: currentTheme.buttonText,
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Subtract
                </button>
            </div>

            {error && (
                <div style={{ 
                    color: '#f44336',
                    padding: '10px',
                    backgroundColor: isDarkTheme ? '#3c1f1f' : '#ffebee',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>
                    ⚠️ {error}
                </div>
            )}

            {success && (
                <div style={{ 
                    color: '#4CAF50',
                    padding: '10px',
                    backgroundColor: isDarkTheme ? '#1c3c1e' : '#e8f5e9',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>
                    ✅ {success}
                </div>
            )}

            {result !== null && (
                <div style={{ 
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: isDarkTheme ? '#444444' : '#f5f5f5',
                    borderRadius: '4px'
                }}>
                    Result: {result}
                </div>
            )}
        </div>
    );
};

export default Calculator;
