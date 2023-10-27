SELECT * FROM product;

UPDATE product
SET
    main_image = NULL
WHERE
    id != '502f846e-0641-45c0-9244-42fac8f5bfda';

UPDATE product SET price = 188 WHERE id = '502f846e-0641-45c0-9244-42fac8f5bfda';
