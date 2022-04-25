import * as React from 'react';
import { pricePerItem } from '../constants/prices';

// noinspection JSCheckFunctionSignatures
const OrderDetails = React.createContext();

export function useOrderDetails() {
    const context = React.useContext(OrderDetails);

    if (!context) {
        throw new Error('useOrderDetails must be used within OrderDetailsProvider');
    }

    return context;
}

function calculateSubtotal(optionType, optionCounts) {
    let optionCount = 0;
    for (const count in optionCounts[optionType].values()) {
        optionCount += count;
    }

    return optionCount * pricePerItem[optionType];
}

export function OrderDetailsProvider(props) {
    const [optionCounts, setOptionCounts] = React.useState({
        scoops: new Map(),
        toppings: new Map(),
    });
    const [totals, setTotals] = React.useState({
        scoops: 0,
        toppings: 0,
        grandTotal: 0,
    });

    React.useEffect(() => {
        const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
        const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
        const grandTotal = scoopsSubtotal + toppingsSubtotal;

        setTotals({
            scoops: scoopsSubtotal,
            toppings: toppingsSubtotal,
            grandTotal,
        });
    }, [optionCounts]);

    const value = React.useMemo(() => {
        function updateItemsCount(itemName, newItemCount, optionType) {
            const newOptionCounts = { ...optionCounts };
            const optionsCountsMap = optionCounts[optionType];
            optionsCountsMap.set(itemName, parseInt(newItemCount));

            setOptionCounts(newOptionCounts);
        }
        return [{ ...optionCounts, totals }, updateItemsCount];
    }, [optionCounts, totals]);

    return (
        <OrderDetails.Provider
            value={value}
            {...props}
        />
    );
}
