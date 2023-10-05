-- Create the Category table to represent the main categories.
CREATE TABLE Category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Populate the Category table with data.
INSERT INTO Category (category_id, category_name) VALUES
    (1, 'Electronics'),
    (2, 'Kitchen');

-- Create the Subcategory table to represent subcategories within Electronics.
CREATE TABLE Subcategory (
    subcategory_id INT PRIMARY KEY,
    subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the Subcategory table with data.
INSERT INTO Subcategory (subcategory_id, subcategory_name, category_id) VALUES
    (1, 'Smartphones', 1),
    (2, 'Laptops', 1),
    (3, 'Tablets', 1),
    (4, 'Headphones', 1);

-- Create the ElectronicItems table to store electronic item details.
CREATE TABLE ElectronicItems (
    electronic_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (subcategory_id) REFERENCES Subcategory(subcategory_id)
);

-- Create the Subcategory table to represent subcategories within Kitchen.
CREATE TABLE KitchenSubcategory (
    kitchen_subcategory_id INT PRIMARY KEY,
    kitchen_subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the KitchenSubcategory table with data.
INSERT INTO KitchenSubcategory (kitchen_subcategory_id, kitchen_subcategory_name, category_id) VALUES
    (1, 'Cookware', 2),
    (2, 'Food Storage', 2),
    (3, 'Utensils', 2);

-- Create the KitchenItems table to store kitchen item details.
CREATE TABLE KitchenItems (
    kitchen_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    kitchen_subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (kitchen_subcategory_id) REFERENCES KitchenSubcategory(kitchen_subcategory_id)
);

-- Populate the ElectronicItems and KitchenItems tables with data.
-- You can insert your electronic and kitchen item details here.
