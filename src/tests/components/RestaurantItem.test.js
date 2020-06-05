import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import RestaurantItem from '../../components/RestaurantItem';

describe('RestaurantItem component', () => {
    test('component renders all content properly', () => {
    
        const restaurant = {
            name: 'Test restaurant',
            address: 'Place',
            city: 'Test City',
            postal_code: 'abc123',
            price: 2
        };
    
        
        // Render RestaurantItem component.
        const component = render(
            <RestaurantItem  restaurant={restaurant} />
        )
    
        const contentEl = component.container.querySelector('.content');
        expect(contentEl).toHaveTextContent('Test restaurant');
        expect(contentEl).toHaveTextContent('Place');
        expect(contentEl).toHaveTextContent('Test City');
        expect(contentEl).toHaveTextContent('abc123');
        expect(contentEl).toHaveTextContent(2);
    });
})