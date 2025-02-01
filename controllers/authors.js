const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger-tags['authors']
    const result = await mongodb.getDatabase().db('project2').collection('authors').find();
    result.toArray().then((authors) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(authors);
    });
};

const getSingle = async (req, res) => {
    //#swagger-tags['authors']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid author id to find a author.');
      }
    const authorId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('authors').find({_id: authosId });
    result.toArray().then((authors) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(authors[0]);
    });
};

const createauthor = async (req, res) => {
    //#swagger-tags['authors']
    const author = {
        fistName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db('project2').collection('authors').insertOne(author);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the author.');
    }
};

const updateauthor = async (req, res) => {
    //#swagger-tags['authors']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid author id to update a author.');
      }
    const authorId = new ObjectId(req.params.id);
    const author = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDatabase().db('project2').collection('authors').modifyOne({_id: authorId}, author);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating the author.');
    }
};

const deleteauthor = async (req, res) => {
    //#swagger-tags['authors']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid author id to delete a author.');
      }
    const authorId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('project2').collection('authors').deleteOne({_id: authorId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting the author.');
    }
};

module.exports = {
    getAll,
    getSingle,
    createauthor,
    updateauthor,
    deleteauthor
};