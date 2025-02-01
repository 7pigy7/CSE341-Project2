const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger-tags['books']
    const result = await mongodb.getDatabase().db('project2').collection('books').find();
    result.toArray().then((books) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(books);
    });
};

const getSingle = async (req, res) => {
    //#swagger-tags['books']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid book id to find a book.');
      }
    const bookId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('books').find({_id: bookId });
    result.toArray().then((books) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(books[0]);
    });
};

const createbook = async (req, res) => {
    //#swagger-tags['books']
    const book = {
        title: req.body.title,
        authorId: req.body.authorId,
        publishedYear: req.body.publishedYear,
        category: req.body.category
    };
    const response = await mongodb.getDatabase().db('project2').collection('books').insertOne(book);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the book.');
    }
};

const updatebook = async (req, res) => {
    //#swagger-tags['books']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid book id to update a book.');
      }
    const bookId = new ObjectId(req.params.id);
    const book = {
        title: req.body.title,
        authorId: req.body.authorId,
        publishedYear: req.body.publishedYear,
        category: req.body.category
    };
    const response = await mongodb.getDatabase().db('project2').collection('books').modifyOne({_id: bookId}, book);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the book.');
    }
};

const deletebook = async (req, res) => {
    //#swagger-tags['books']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid book id to delete a book.');
      }
    const bookId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('project2').collection('books').deleteOne({_id: bookId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the book.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createbook,
    updatebook,
    deletebook
};