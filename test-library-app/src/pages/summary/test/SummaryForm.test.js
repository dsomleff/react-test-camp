import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

let checkbox;
let confirmButton;
beforeEach(() => {
    render(<SummaryForm />);
    checkbox = screen.getByRole('checkbox', { name: /terms&conditions/i });
    confirmButton = screen.getByRole('button', { name: /confirm order/i });
});

it('Initial conditions', () => {
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
});

it('Checkbox disable button on a 1click and enable in a 2d', () => {
    userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});

it('popover response to hover', async () => {
    const nullPopover = screen.queryByText(/no ice cream will be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms&conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText(/no ice cream will be delivered/i);
    expect(popover).toBeInTheDocument();

    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() => screen.queryByText(/no ice cream will be delivered/i));
});
