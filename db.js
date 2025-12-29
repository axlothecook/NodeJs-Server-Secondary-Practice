const authors = [
    {
        id: 1,
        name: 'Bryan'
    },
    {
        id: 2,
        name: 'Christian'
    },
    {
        id: 3,
        name: 'Jason'
    },
];

const getAuthorById = async (authorId) => authors.find(author => author.id === authorId);

module.exports = { getAuthorById };