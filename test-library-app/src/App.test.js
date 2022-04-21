import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has initial color', () => {
    render(<App />);

    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});
    expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
    render(<App />);

    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toBeEnabled();
    
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
    expect(checkbox).not.toBeChecked();
});

test('disabled button', () => {
    render(<App />);
    
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
    
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});
