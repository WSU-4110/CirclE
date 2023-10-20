-- Create the Category table to represent the main categories.
CREATE TABLE Category (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL
);

-- Populate the Category table with data.
INSERT INTO Category (category_id, category_name) VALUES
    (1, 'Electronics'),
    (2, 'Kitchen'),
    (3,'Health and Personal Care'),
    (4,'Home Decor and Furnishings'),
    (5,'Pets'),
    (6,'Clothing and Accessories'),
    (7,'Cleaning and Maintenance');

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
    (4, 'Headphones', 1),


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





-- Create the Subcategory table to represent subcategories within Health and Personal Care.

CREATE TABLE Health_and_Personal_Care_Subcategory (
   Health_and_Personal_Care_subcategory_id INT PRIMARY KEY,
    Health_and_Personal_Care_subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the Health and Personal Care Subcategory table with data.
INSERT INTO Health_and_Personal_Care_Subcategory (Health_and_Personal_Care_subcategory_id, Health_and_Personal_Care_subcategory_name, category_id) VALUES
    (1, 'Plastic Mouthwash Bottles', 3), 
    (2, 'Aluminum Tubes', 3),
    (3, 'Hair Care Tools', 3),
    (4, 'Glass Jars', 3),
    (5, 'Silicone Products', 3),
    (6, 'Contact Lens and Packaging', 3),
    (7, 'Toothbrushes', 3),
    (8, 'Razor Blades', 3),
    (9, 'Plastic Soap Dispensers', 3);

-- Create the health and persoanl care Items table to store Health_and_Personal_Care  item details.
CREATE TABLE Health_and_Personal_Care_Items (
    Health_and_Personal_Care_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    Health_and_Personal_Care_subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (Health_and_Personal_Care_subcategory_id) REFERENCES Health_and_Personal_Care_Subcategory(Health_and_Personal_Care_subcategory_id)
);



-- Create the Subcategory table to represent subcategories within Home Decor and Furnishings.
CREATE TABLE Home_Decor_and_Furnishings_Subcategory (
    Home_Decor_and_Furnishings_subcategory_id INT PRIMARY KEY,
    Home_Decor_and_Furnishings_subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the Home_Decor_and_Furnishings Subcategory table with data.
INSERT INTO Home_Decor_and_Furnishings_Subcategory (Home_Decor_and_Furnishings_subcategory_id, Home_Decor_and_Furnishings_subcategory_name, category_id) VALUES
    (1, 'Wall Arts', 4),
    (2, 'Indoor Plants', 4),
    (3, 'Mirrors', 4),
    (4, 'Bed Frames', 4),
    (5, 'Dining Tables', 4),
    (6, 'Table Lamps', 4),
    (7, 'Candles', 4),
    (8, 'Curtains', 4),
    (9, 'Area Rugs', 4),
    (10, 'Throw Pillows', 4);

-- Create the Home_Decor_and_Furnishings Items table to store Home_Decor_and_Furnishings item details.
CREATE TABLE Home_Decor_and_Furnishings_Items (
    Home_Decor_and_Furnishings_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    Home_Decor_and_Furnishings_subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (Home_Decor_and_Furnishings_subcategory_id) REFERENCES Home_Decor_and_Furnishings_Subcategory(Home_Decor_and_Furnishings_subcategory_id)
);



-- Create the Subcategory table to represent subcategories within Pets.
CREATE TABLE Pets_Subcategory (
    Pets_subcategory_id INT PRIMARY KEY,
    Pets_subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the Pets Subcategory table with data.
INSERT INTO Pets_Subcategory (Pets_subcategory_id, Pets_subcategory_name, category_id) VALUES
    (1, 'Bird Cages', 5),
    (2, 'Aquariums', 5),
    (3, 'Pet treats', 5),
    (4, 'Cat litter Box', 5),
    (5, 'Dog Leashes', 5),
    (6, 'Training Pad', 5),
    (7, 'Pet Door', 5),
    (8, 'Pet medications', 5),
    (9, 'Pet costumes', 5),
    (10, 'Pet Grooming Tools', 5);

-- Create the Pets Items table to store Pets item details.
CREATE TABLE Pets_Items (
    Pets_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    Pets_subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (Pets_subcategory_id) REFERENCES Pets_Subcategory(Pets_subcategory_id)
);


-- Create the Subcategory table to represent subcategories within Clothing and Accessories.
CREATE TABLE Clothing_and_Accessories_Subcategory (
    Clothing_and_Accessories_subcategory_id INT PRIMARY KEY,
    Clothing_and_Accessories_subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the Clothing_and_Accessories Subcategory table with data.
INSERT INTO Clothing_and_Accessories_Subcategory (Clothing_and_Accessories_subcategory_id, Clothing_and_Accessories_subcategory_name, category_id) VALUES
    (1, 'Shoe Laces', 6),
    (2, 'Hats', 6),
    (3, 'Watches', 6),
    (4, 'Ties', 6),
    (5, 'Sneakers', 6),
    (6, 'Sunglasses', 6),
    (7, 'Jeans', 6),
    (8, 'T-shirts', 6),
    (9, 'Scarves', 6),
    (10, 'Swimsuits', 6);

-- Create the Clothing_and_Accessories Items table to store Clothing_and_Accessories item details.
CREATE TABLE Clothing_and_Accessories_Items (
    Clothing_and_Accessories_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    Clothing_and_Accessories_subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (Clothing_and_Accessories_subcategory_id) REFERENCES Clothing_and_Accessories_Subcategory(Pets_subcategory_id)
);



-- Create the Subcategory table to represent subcategories within Cleaning and Maintenance.

CREATE TABLE Cleaning_and_Maintenance_Subcategory (
    Cleaning_and_Maintenance_subcategory_id INT PRIMARY KEY,
    Cleaning_and_Maintenance_subcategory_name VARCHAR(255) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Populate the Cleaning_and_Maintenance Care Subcategory table with data.
INSERT INTO Cleaning_and_Maintenance_Subcategory (Cleaning_and_Maintenance_subcategory_id, Cleaning_and_Maintenance_subcategory_name, category_id) VALUES
    (1, 'Plastic Mouthwash Bottles', 3), 
    (2, 'Aluminum Tubes', 3),
    (3, 'Hair Care Tools', 3),
    (4, 'Glass Jars', 3),
    (5, 'Silicone Products', 3),
    (6, 'Contact Lens and Packaging', 3),
    (7, 'Toothbrushes', 3),
    (8, 'Razor Blades', 3),
    (9, 'Plastic Soap Dispensers', 3);

-- Create the hCleaning_and_Maintenance Items table to store Cleaning_and_Maintenance  item details.
CREATE TABLE Cleaning_and_Maintenance_Items (
    Cleaning_and_Maintenance_item_id INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    Cleaning_and_Maintenance_subcategory_id INT,
    material VARCHAR(255),
    reuse_info VARCHAR(255),
    recycle_info VARCHAR(255),
    reduce_info VARCHAR(255),
    money_generation_info VARCHAR(255),
    eco_rating INT,
    eco_friendly_company VARCHAR(255),
    FOREIGN KEY (Cleaning_and_Maintenance_subcategory_id) REFERENCES Cleaning_and_Maintenance_Subcategory(Cleaning_and_Maintenance_subcategory_id)
);
