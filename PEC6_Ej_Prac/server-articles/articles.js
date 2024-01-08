const express = require('express');
const router = express.Router();

const articles = [
  {
    id: 1,
    name: 'Maquina escribir',
    imageUrl: 'assets/images/article-1.png',
    price: 19.95,
    isOnSale: false,
    quantityInCart: 0
  },
  {
    id: 2,
    name: 'Reloj de pared',
    imageUrl: '',
    price: 6.15,
    isOnSale: true,
    quantityInCart: 1
  },
  {
    id: 3,
    name: 'Pantalla LG',
    imageUrl: 'assets/images/article-3.png',
    price: 31.9,
    isOnSale: false,
    quantityInCart: 0
  }
];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
    const foundArticles = articles.filter(
      ({ name }) => name.toLowerCase().indexOf(query) !== -1
    );
    return res.status(200).json(foundArticles);
  }
  return res.status(200).json(articles);
});

router.post('/', (req, res) => {
  let article= req.body;
  if (article.id) {
  
    return res
      .status(400)
      .json({ msg: 'Article Id seems to already have an id assigned' });
  }

  article.id = articles.length + 1;
  article.quantityInCart = 0;
  articles.push(article);
  return res.status(200).json(article);
});

router.patch('/:id', (req, res) => {
  const articleId = req.params.id;
  const foundArticle = articles.find(({ id }) => id == articleId);
  if (foundArticle) {
    const changeInQuantity = req.body.changeInQuantity;

    if (foundArticle.quantityInCart + changeInQuantity >= 0) {
      foundArticle.quantityInCart += changeInQuantity;
      return res.status(200).json({ msg: 'Successfully updated cart' });
    } else {
      return res.status(400).json({ msg: 'Invalid quantity. Cannot be negative.' });
    }
  }
  return res
    .status(400)
    .json({ msg: 'Article with id ' + articleId + ' not found.' });
});

module.exports = router;
