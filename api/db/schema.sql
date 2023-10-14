DROP TABLE IF EXISTS shopping_cart_article;
DROP TABLE IF EXISTS shopping_cart;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS product_characteristic;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS clients;

-- Les clients enregistrés
CREATE OR REPLACE TABLE clients (
    id CHAR(36) NOT NULL,
    token CHAR(64) NOT NULL,
    passwd CHAR(64) NOT NUll,
    username VARCHAR(32),

    PRIMARY KEY (id)
);

-- Contient les produits
CREATE OR REPLACE TABLE product (
    id CHAR(36),
    name VARCHAR(256) NOT NULL,
    description VARCHAR(2048),
    price INT UNSIGNED NOT NULL DEFAULT 1,
    image VARCHAR(256),

    UNIQUE (image),
    CHECK (price > 0),
    PRIMARY KEY (id)
);

-- Contiendra toutes les caractéristiques d'un produit
CREATE OR REPLACE TABLE product_characteristic (
    name VARCHAR(128),
    detail VARCHAR(256),
    product CHAR(36),

    FOREIGN KEY (product) REFERENCES product (id) ON DELETE CASCADE,
    PRIMARY KEY (product, name)
);

-- Contient les avis d'un produit
CREATE OR REPLACE TABLE reviews (
    id CHAR(36) NOT NULL,
    user CHAR(36),
    review VARCHAR(512),
    note TINYINT,

    CHECK (0 <= note <= 5),
    FOREIGN KEY (user) REFERENCES clients (id) ON DELETE CASCADE ,
    PRIMARY KEY (id)
);


-- Contient les informations sur le panier d'un utilisateur
CREATE OR REPLACE TABLE shopping_cart (
    user CHAR(36) NOT NULL,
    id CHAR(36) NOT NUll,

    UNIQUE (user),
    PRIMARY KEY (id)
);

-- Contient les articles avec leur quantité des paniers
CREATE OR REPLACE TABLE shopping_cart_article (
    shopping_cart_id CHAR(36) NOT NULL,
    product CHAR(36) NOT NULL,
    quantity INT UNSIGNED DEFAULT 1,

    FOREIGN KEY (product) REFERENCES product (id) ON DELETE CASCADE,
    FOREIGN KEY (shopping_cart_id) REFERENCES shopping_cart (id) ON DELETE CASCADE,
    CHECK (quantity > 0),
    PRIMARY KEY (shopping_cart_id, product)
);









INSERT INTO clients VALUE (
    '251ef68e-6d10-4e08-a8e9-d4f42ad9fe36',
    'cd251870133e6dc175f6f616ea1a6e0dde6601dbde6e2ec173d1cc720cac7b58',
    '909104cdb5b06af2606ed4a197b07d09d5ef9a4aad97780c2fe48053bce2be52', -- "yeet"
    'Test'
);

INSERT INTO product VALUE (
    '30dfd1d3-76bd-4c3b-b988-dd8235f7f238',
    'Kit anti-crevaison',
    'Kit anti-crevaison pour vélo',
    10,
    NULL
);