const db = require ('../db.js');
const CustomNotFoundError = require('../errors/CustomNotFoundError.js');

async function getAuthorById(req, res) {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        throw new CustomNotFoundError('Author not found');
        // res.status(404).send('Author not found');
        // return;
    };

    res.send(`Author name: ${author.name}`);
};

module.exports = { getAuthorById };

