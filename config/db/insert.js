const Book = require('../../models/Book');
require('./mongoose');
// A utility for manually inserting data to the database

const data = [
  {
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    quantity: 5,
    reservedQuantity: 0,
  },
  {
    title: 'Head-First Python',
    author: 'Paul Barry',
    quantity: 2,
    reservedQuantity: 0,
  },
  {
    title: 'Invent Your Own Computer Games with Python',
    author: 'Al Sweigart',
    quantity: 1,
    reservedQuantity: 0,
  },
  {
    title: 'Think Python: How to Think Like a Computer Scientist',
    author: 'Allen B. Downey',
    quantity: 15,
    reservedQuantity: 0,
  },
  {
    title:
      'Effective Computation in Physics: Field Guide to Research with Python',
    author: 'Anthony Scopatz, Kathryn D. Huff',
    quantity: 7,
    reservedQuantity: 0,
  },
  {
    title: 'Learn Python 3 the Hard Way',
    author: 'Zed A. Shaw',
    quantity: 0,
    reservedQuantity: 0,
  },
  {
    title: 'The Vue Handbook',
    author: 'Flavio Copes',
    quantity: 0,
    reservedQuantity: 0,
  },
  {
    title: 'Vue.js: Up and Running',
    author: 'Callum Macrae',
    quantity: 1,
    reservedQuantity: 0,
  },
  {
    title: 'Fullstack Vue',
    author: 'Hassan Djirdeh',
    quantity: 3,
    reservedQuantity: 0,
  },
  {
    title: 'Vue.js 2 and Bootstrap 4 Web Development',
    author: 'Olga Filipova',
    quantity: 21,
    reservedQuantity: 0,
  },
];

Book.collection.insertMany(data);
