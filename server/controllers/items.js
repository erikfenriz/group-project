const mongodb = require('../db/connect');

const ObjectId = require('mongodb').ObjectId;
const collectionName = 'items';

const getAll = async (req, res) => {
  try {
    // const db = mongodb.getDb().db();
    // const collections = await db.listCollections().toArray();
    // console.log('Collections:', collections);

    const result = await mongodb.getDb().db().collection(collectionName).find();
    result.toArray().then((lists) => {
      if (lists.length === 0) {
        res.status(404).json({ message: 'There are no registered items' });
        return;
      }
      res.status(200).json(lists);
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'You must use a valid article ID to find one.' });
    }

    const itemId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection(collectionName).find({ _id: itemId });

    result.toArray().then((lists) => {
        if (lists.length === 0) {
          res.status(404).json({message: 'The item with that ID does not exist.'});
          return;
        }
        res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const createItem = async (req, res) => {
  try {

    const itemBody = {
      name: req.body.name,
      description: req.body.description,
      price: parseFloat(req.body.price),
      size: req.body.size,
      images: req.body.images,
      storeId: parseInt(req.body.storeId),
      storeName: req.body.storeName,
      category: parseInt(req.body.category),
    };

    const response = await await mongodb.getDb().db().collection('items').insertOne(itemBody);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json ({message: 'Some error occurred while creating the item.'})
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateArticle = async (req, res) => {

  const itemBody = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      size: req.body.size,
      images: req.body.images,
      storeId: req.body.storeId,
      storeName: req.body.storeName,
      category: req.body.category
  };

  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'You must use a valid item ID to find one.' });
    }

    const articleId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection(collectionName).replaceOne({ _id: articleId }, articleBody);

    if (response.modifiedCount > 0) {
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while updating the article.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'You must use a valid article ID to find one.' });
    }
    const articleId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection(collectionName).deleteOne({ _id: articleId }, true);

    if (response.deletedCount > 0) {
      res.status(204).json(response);
    } else {
      res.status(500).json(response.error || 'Some error occurred while deleting the article.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
    getAll,
    getSingle,
    createItem,
    updateArticle,
    deleteArticle
};
