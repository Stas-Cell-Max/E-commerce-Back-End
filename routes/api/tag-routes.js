const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Routes for '/api/tags'

// GET all tags - Includes associated Product data

router.get('/', (req, res) => {
  Tag.findAll({
    // Include Product model to show products associated with each tag
    include: [{ model: Product }]
  })
  .then(dbTagData => res.json(dbTagData)) // Send back the data as JSON
  .catch(err => {
    console.error(err); // Log errors to the console
    res.status(500).json(err); // Send back a 500 error response
  });
});

// GET a single tag by its ID - Includes associated Product data

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, {
    // Include Product model here as well
    include: [{ model: Product }]
  })
  .then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({ message: 'No tag found with this id' }); // If not found, send a 404 response
      return;
    }
    res.json(dbTagData); // Send back the found tag as JSON
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// POST a new tag

router.post('/', (req, res) => {
   // Create a new tag with the provided 'tag_name' in req.body
   Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagData => res.json(dbTagData)) // Send back the created tag data as JSON
  .catch(err => {
    console.error(err);
    res.status(400).json(err); // If error, send back a 400 response
  });
});


// PUT to update a tag's name by its ID

router.put('/:id', (req, res) => {
   // Update the tag where the ID matches the ID in the route parameter
   Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbTagData => {
    if (!dbTagData[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(dbTagData); // Send back the updated tag data as JSON
  })
  .catch(err => {
    console.error(err);
    res.status(500).json(err);
  });
});

// DELETE a tag by its ID

router.delete('/:id', (req, res) => {
 // Delete the tag where the ID matches the ID in the route parameter
 Tag.destroy({
  where: {
    id: req.params.id
  }
})
.then(dbTagData => {
  if (!dbTagData) {
    res.status(404).json({ message: 'No tag found with this id' });
    return;
  }
  res.json({ message: 'Tag successfully deleted' }); // Confirm deletion as JSON response
})
.catch(err => {
  console.error(err);
  res.status(500).json(err);
});
});

module.exports = router;
