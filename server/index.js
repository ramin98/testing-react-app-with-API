const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware для парсинга JSON-тел запросов
app.use(express.json());
app.use(cors());


// Имитация базы данных для инвентаря
let inventory = {
  '1': { id: 1, name: 'Test Product', quantity: 100 }
};

// Эндпоинт для уменьшения количества товара
app.post('/api/inventory/:productId/reduce', (req, res) => {
  const { productId } = req.params;
  const { count } = req.body;

  if (inventory[productId] && inventory[productId].quantity >= count) {
    inventory[productId].quantity -= count;
    res.json({ success: true, quantity: inventory[productId].quantity });
  } else {
    res.status(400).json({ success: false, message: 'Недостаточно товара на складе или товар не найден' });
  }
  console.log(inventory)
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
