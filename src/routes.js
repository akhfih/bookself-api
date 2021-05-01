/* eslint-disable linebreak-style */
const { addBooksHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },

];

module.exports = routes;
