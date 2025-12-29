const { Router } = require('express');
const authorRouter = Router();
const { getAuthorById } = require('../controllers/authorController')

authorRouter.get('/', (req, res) => res.send('All authors.'));

// authorRouter.get('/:authorId', (req, res) => {
//     const { authorId } = req.params;
//     res.send(`AuthorID: ${authorId}`);
// });

authorRouter.get('/:authorId', getAuthorById);

module.exports = authorRouter;