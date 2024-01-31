const API_URL = 'http://localhost:3000/api/inventory';

const InventoryAPI = {
  reduceInventoryCount: async (productId, count) => {
    try {
      const response = await fetch(`${API_URL}/${productId}/reduce`, {
        method: 'POST', // Используем метод POST для отправки данных на сервер
        headers: {
          'Content-Type': 'application/json', // Указываем тип контента в заголовках
        },
        body: JSON.stringify({ count }), // Передаем количество как часть тела запроса
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json(); // Парсим JSON-ответ от сервера
      return data; // Возвращаем полученные данные
    } catch (error) {
      console.error('Ошибка при уменьшении количества товара:', error);
      throw error; // Пробрасываем ошибку для дальнейшей обработки
    }
  }
};

export default InventoryAPI;
