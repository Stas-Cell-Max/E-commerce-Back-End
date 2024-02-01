##Models and Relationships

1. Product

- Description: Represents the items available for purchase.
- Relationships:
     - belongsTo Category: A product is associated with a single category.
     - belongsToMany Tag through ProductTag: A product can have multiple tags.

2. Category

- Description: Represents the categories for products.
- Relationships:
   - hasMany Product: A category can include multiple products.

3. Tag

- Description: Represents labels or identifiers for products, such as "sale", "popular", etc.
- Relationships:
   - belongsToMany Product through ProductTag: A tag can be associated with multiple products.

4. ProductTag

- Description: A join table that creates a many-to-many relationship between Products and Tags.
- Key Fields:
   - product_id: Foreign Key to Product.
   - tag_id: Foreign Key to Tag.

## Foreign Key Associations

- Product to Category: category_id in Product as a Foreign Key.
- ProductTag:
     - product_id as a Foreign Key linking to Product.
     - tag_id as a Foreign Key linking to Tag.
