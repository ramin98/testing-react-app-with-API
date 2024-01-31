import React from 'react';
import InventoryAPI from './InventoryAPI'; // Предполагаемый путь к InventoryAPI

const CartItem = ({ product }) => {
  
  const addToCart = async () => {
    try {
      await InventoryAPI.reduceInventoryCount(product.id, 1);
      alert(`Товар ${product.name} добавлен в корзину!`);
    } catch (error) {
      alert('Ошибка при добавлении товара в корзину!');
    }
  };

  return (
    <div className="cart-item">
      <h3>{product.name}</h3>
      <p>Количество доступно: {product.quantity}</p>
      <button onClick={addToCart}>Добавить в корзину</button>
    </div>
  );
};

export default CartItem;
