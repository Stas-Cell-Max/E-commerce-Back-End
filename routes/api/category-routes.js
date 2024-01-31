const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET Route - Fetch All Categories
// This route retrieves all categories along with their associated products

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


/// GET Route - Fetch a Single Category by ID
// This route retrieves a specific category by its ID along with associated products

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

// POST Route - Create a New Category
// This route creates a new category with the provided name

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

/// PUT Route - Update a Category
// This route updates the name of a category specified by its ID

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where:{
      id: req.params.id
    }
  })
  .then(dbCategoryData  => {
    if (!dbCategoryData[0]) {
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

// DELETE Route - Delete a Category
// This route deletes a category specified by its ID but only if there are no products associated with it

router.delete('/:id', (req, res) => {
  // First, check if there are any products associated with this category
  Product.findOne({ where: { category_id: req.params.id } })
    .then(product => {
      if (product) {
        // If there are products, prevent deletion and respond with an error message
        res.status(400).json({ message: 'Cannot delete category with associated products' });
        return;
      }
      // If no associated products, proceed with deletion
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
          res.json({ message: 'Category successfully deleted' });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json(err);
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
