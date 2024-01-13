const router = require('express').Router();
const { ProductTag, Product, Tag } = require('../../models');
\
//GET Route - Fetch All ProductTags
router.get('/', (req, res) => {
    ProductTag.findAll({
      include: [
        {
          model: Product,
        },
        {
          model: Tag,
        }
      ]
    })
    .then(dbProductTagData => res.json(dbProductTagData))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
  });

  //GET Route - Fetch a Single ProductTag by ID
  router.get('/:id', (req, res) => {
    ProductTag.findByPk(req.params.id, {
      include: [Product, Tag]
    })
    .then(dbProductTagData => {
      if (!dbProductTagData) {
        res.status(404).json({ message: 'No product tag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
  });


  //POST Route - Create a New ProductTag
  router.post('/', (req, res) => {
    // expects {product_id: 1, tag_id: 2}
    ProductTag.create({
      product_id: req.body.product_id,
      tag_id: req.body.tag_id
    })
    .then(dbProductTagData => res.json(dbProductTagData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  });

  
  //PUT Route - Update a ProductTag
  router.put('/:id', (req, res) => {
    // expects {product_id: 1, tag_id: 2}
    ProductTag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    .then(dbProductTagData => {
      if (!dbProductTagData) {
        res.status(404).json({ message: 'No product tag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json(err);
    });
  });

  //DELETE Route - Delete a ProductTag
  router.delete('/:id', (req, res) => {
    ProductTag.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbProductTagData => {
      if (!dbProductTagData) {
        res.status(404).json({ message: 'No product tag found with this id' });
        return;
      }
      res.json(dbProductTagData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
  });
  
  module.exports = router;