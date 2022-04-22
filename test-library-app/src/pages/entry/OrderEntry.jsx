import Options from './Options';
import { Fragment } from 'react';

export default function OrderEntry() {
    return (
        <Fragment>
            <Options optionType={'scoops'} />
            <Options optionType={'toppings'} />
        </Fragment>
    );
}
