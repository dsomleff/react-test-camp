import { render, screen } from '@testing-library/react';
import Options from '../Options';

it('display image for each scoop from the server', async () => {
    render(<Options optionType="scoops" />);

    const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // noinspection JSUnresolvedVariable
    const altText = scoopImages.map(element => element.alt);
    expect(altText).toEqual(['chocolate scoop', 'vanilla scoop']);
});
