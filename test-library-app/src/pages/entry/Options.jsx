import axios from 'axios';
import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOption';
import Row from 'react-bootstrap/Row';

export default function Options({ optionType }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // optionType is 'scoops' or 'toppings'
        axios
            .get(`http://localhost:3030/${optionType}`)
            .then(response => setItems(response.data))
            .catch(error => {
                //TODO
            });
    }, [optionType]);

    const ItemComponent = optionType === 'scoops' ? ScoopOption : null;
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