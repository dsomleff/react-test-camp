import { render, screen } from '@testing-library/react';
import Options from '../Options';

it('display image for each scoop from the server', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // noinspection JSUnresolvedVariable
    const altText = scoopImages.map(img => img.alt);
    expect(altText).toEqual(['chocolate scoop', 'vanilla scoop']);
});

it('display image for each topping from the server', async () => {
    render(<Options optionType="toppings" />);

    const toppingImages = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);

    // noinspection JSUnresolvedVariable
    const altText = toppingImages.map(img => img.alt);
    expect(altText).toEqual(['Cherries topping', 'M&M topping', 'Hot fudge topping']);
});
