// import { render, screen } from '@testing-library/react';
// import { OrderDetailsProvider } from '../../../contexts/OrderDetails';
import { render, screen } from '../../../test-utils/wrapper-utils';
import userEvent from '@testing-library/user-event';
import Options from '../Options';

it.skip('should update subtotal when scoop changed', async () => {
    // Options receive props from context OrderDetailsProvider,
    // so we need to specify the wrapper for it.
    // It can be also Redux provider or Route.
    // you can do it like this:
    // render(<Options orderType={'scoops'} />, { wrapper: OrderDetailsProvider });
    //or you can create your own utils
    render(<Options orderType={'scoops'} />);

    const scoopSubtotal = screen.getByText('Scoops total: $', { exact: false });
    expect(scoopSubtotal).toHaveTextContent('0.00');

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' });
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, '1');
    expect(scoopSubtotal).toHaveTextContent('2.00');

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate' });
    userEvent.clear(chocolateInput);
    userEvent.type(chocolateInput, '2');
    expect(scoopSubtotal).toHaveTextContent('6.00');
});
