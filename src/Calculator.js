import React, { useState } from 'react';

const Calculator = () => {
    const [numbers, setNumbers] = useState({
        num1: '',
        num2: ''
    });
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNumbers(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear messages when user starts typing
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
            border: '1px solid #ccc', 
            padding: '20px', 
            borderRadius: '8px',
            maxWidth: '400px',
            margin: '20px auto'
        }}>
            <h2>Calculator with Feedback</h2>
            
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
                        width: '150px'
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
                        width: '150px'
                    }}
                />
            </div>

            <div style={{ marginBottom: '15px' }}>
                <button 
                    onClick={handleAdd}
                    style={{
                        padding: '8px 15px',
                        marginRight: '10px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
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
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Subtract
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div style={{ 
                    color: '#f44336',
                    padding: '10px',
                    backgroundColor: '#ffebee',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>
                    ⚠️ {error}
                </div>
            )}

            {/* Success Message */}
            {success && (
                <div style={{ 
                    color: '#4CAF50',
                    padding: '10px',
                    backgroundColor: '#e8f5e9',
                    borderRadius: '4px',
                    marginBottom: '10px'
                }}>
                    ✅ {success}
                </div>
            )}

            {/* Result Display */}
            {result !== null && (
                <div style={{ 
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                    marginTop: '10px'
                }}>
                    Result: {result}
                </div>
            )}
        </div>
    );
};

export default Calculator;
