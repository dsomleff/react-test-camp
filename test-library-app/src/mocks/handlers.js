import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
        return res(
            ctx.json([
                { name: 'chocolate', img: '/images/chocolate.png' },
                { name: 'vanilla', img: '/images/vanilla.png' },
            ])
        );
    }),
];
