const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//GET Route - Fetch All Categories
router.get('/', (req, res) => {
  Category.findAll({
  include: [Product]
})
.then(dbCategoryData => res.json(dbCategoryData))
.catch(err => {
  console.error(err);
  res.status(500).json(err);
});
});


//GET Route - Fetch a Single Category by ID
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    // Optionally include associated products
    include: [Product]
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

//POST Route - Create a New Category
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  }); 
});

//PUT Route - Update a Category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  })
  .then(dbCategoryData  => {
    if (!dbCategoryDta[0]) {
      res.status(404).json({message: 'No category found with this id'});
      return;
    }
  
  res,json(dbCategoryData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

//DELETE Route - Delete a Category
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

module.exports = router;
