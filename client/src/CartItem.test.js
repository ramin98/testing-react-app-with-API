import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CartItem from './CartItem'; // Путь к вашему компоненту CartItem
import * as InventoryAPI from './InventoryAPI'; // API для работы с инвентарем

// Мокаем API-запрос для уменьшения количества товара
jest.mock('./InventoryAPI', () => ({
    reduceInventoryCount: jest.fn(),
  }));

describe('CartItem Component', () => {
  it('reduces inventory count when add to cart is clicked', async () => {
    const testProduct = { id: '1', name: 'Test Product', quantity: 10 };

    const { getByText } = render(<CartItem product={testProduct} />);

    // Находим и кликаем по кнопке "Добавить в корзину"
    fireEvent.click(getByText(/добавить в корзину/i));

    // Ожидаем, что вызов API будет сделан
    await waitFor(() => expect(InventoryAPI.reduceInventoryCount).toHaveBeenCalledWith(testProduct.id, 1));
});
});


