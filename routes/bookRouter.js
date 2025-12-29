const { Router } = require('express');
const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('All books'));

bookRouter.get('/:bookId/reserve', (req, res) => {
    const { bookId } = req.params;
    res.send(`Book with ID: ${bookId} has not been reserved`);
});

bookRouter.post('/:bookId/reserve', (req, res) => {
    const { bookId } = req.params;
    res.send(`You have reserved the book with ID: ${bookId}`);
});

module.exports = bookRouter;