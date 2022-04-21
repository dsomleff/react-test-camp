import './App.css';
import { useState } from 'react';

function App() {
    const [color, setColor] = useState('red');
    const buttonColor = color === 'red' ? 'blue' : 'red';
    const [disabled, setDisabled] = useState(false);

    const changeButton = () => {
        setColor(buttonColor);
    };

    const greyButton = e => {
        setDisabled(e.target.checked);
        setColor('grey');
    };

    return (
        <div>
            <button
                style={{ backgroundColor: color }}
                onClick={changeButton}
                disabled={disabled}
            >
                Change to {buttonColor}
            </button>

            <input
                type="checkbox"
                id="checkbox"
                onClick={greyButton}
                defaultChecked={disabled}
                aria-checked={disabled}
            />

            <label htmlFor="checkbox">Disable button</label>
        </div>
    );
}

export default App;
