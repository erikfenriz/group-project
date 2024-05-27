const mongodb = require('../db/connect');

const ObjectId = require('mongodb').ObjectId;
const collectionNameItems = 'items';
const collectionNameRating = 'rating';

const getAll = async (req, res) => {
  try {
    // const db = mongodb.getDb().db();
    // const collections = await db.listCollections().toArray();
    // console.log('Collections:', collections);

    const result = await mongodb.getDb().db().collection(collectionNameItems).find();
    result.toArray().then((items) => {
      if (items.length === 0) {
        res.status(404).json({ message: 'There are no registered items' });
        return;
      }
      res.status(200).json(items);
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'You must use a valid item ID' });
    }

    const itemId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection(collectionNameItems).find({ _id: itemId });

    result.toArray().then((items) => {
        if (items.length === 0) {
          res.status(404).json({message: 'The item with that ID does not exist.'});
          return;
        }
        res.status(200).json(items[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getItemRating = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'You must use a valid item ID' });
    }

    const itemId = req.params.id;
    const result = await mongodb.getDb().db().collection(collectionNameRating).find({ id: itemId });

    result.toArray().then((ratings) => {
      if (ratings.length === 0) {
        res.status(404).json({message: 'The item with that ID does not exist.'});
        return;
      }
      res.status(200).json(ratings[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const postItemRating = async (req, res) => {
  try {
    const itemId = new ObjectId(req.params.id);
    const rating = {
      rating: req.body.rating,
      itemId: itemId,
    };

    const response = await mongodb.getDb().db().collection(collectionNameRating).insertOne(rating);
    if (response.acknowledged) {
      const result = await mongodb.getDb().db().collection(collectionNameRating).find({ itemId: itemId });
      result.toArray().then((ratings) => {
        if (ratings.length === 0) {
          res.status(404).json({message: 'The item with that ID does not exist.'});
          return;
        }
        res.status(201).json(ratings);
      });
    } else {
      res.status(500).json({message: 'Some error occurred while creating the article.'})
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const createArticle = async (req, res) => {
  try {
    const articleBody = {
      title: req.body.title,
      author: req.body.author,
      publication_date: req.body.publication_date,
      content: req.body.content,
      keywords: req.body.keywords,
      source: req.body.source,
      url: req.body.url,
    };

    const response = await mongodb.getDb().db().collection('articles').insertOne(articleBody);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json ({message: 'Some error occurred while creating the article.'})
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateArticle = async (req, res) => {

  const articleBody = {
      title: req.body.title,
      author: req.body.author,
      publication_date: req.body.publication_date,
      content: req.body.content,
      keywords: req.body.keywords,
      source: req.body.source,
      url: req.body.url,
  };

  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: 'You must use a valid article ID to find one.' });
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
    getItemRating,
    postItemRating,
    // createArticle,
    // updateArticle,
    // deleteArticle
};
