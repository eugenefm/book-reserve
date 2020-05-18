const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// @route   GET api/
// @desc    Get paginated search results for available books
// @access  Public

router.get('/', async (req, res) => {
  try {
    const perPage = 3;
    const page = req.query.page || 0;
    console.log(req.query.term);
    const query = {};
    if (req.query.term) query.$text = { $search: req.query.term };

    const books = await Book.find(query)
      .limit(perPage)
      .skip(perPage * page);

    console.log(books);
    if (!books || books.length < 1) {
      return res.status(400).json({ msg: 'No matching books found.' });
    }

    const count = await Book.find(query).countDocuments();
    const pages = Math.ceil(count / perPage);

    res.json({ books, pages, count });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   Patch api/
// @desc    Update book reservation
// @access  Public

router.patch('/', async (req, res) => {
  try {
    const { type, id } = req.body;
    console.log(req.body);

    const book = await Book.findOne({ _id: id });
    if (!book) {
      return res.status(400).json({ msg: 'No book found with this id.' });
    }

    if (type == 'reserve') {
      if (book.reservedQuantity < book.quantity) {
        book.reservedQuantity++;
        await book.save();
        return res.json(book);
      }
      return res.status(400).json({ msg: 'Unable to reserve this book.' });
    }

    if (type == 'return') {
      if (book.reservedQuantity > 0) {
        book.reservedQuantity--;
        await book.save();
        return res.json(book);
      }
      return res.status(400).json({ msg: 'Unable to return this book.' });
    }

    return res.status(400).json({ msg: 'An update type must be provided.' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
