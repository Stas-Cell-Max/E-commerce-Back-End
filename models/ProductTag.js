const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      }
    } // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
