import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';
import Row from 'react-bootstrap/Row';

export default function Options({ optionType }) {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        // optionType is 'scoops' or 'toppings'
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(error => setError(true));
    }, [optionType]);

    if (error) {
        return <AlertBanner />;
    }

    const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
    const optionItems = items.map(item => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.image}
        />
    ));

    // noinspection JSValidateTypes
    return <Row>{optionItems}</Row>;
}
