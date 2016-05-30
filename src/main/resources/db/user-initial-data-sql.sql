/*CREATE SEQUENCE exam_id_seq
  INCREMENT 1
  MINVALUE 10000
  NO MAXVALUE
  START 10000
  CACHE 1;*/

/*INSERT INTO exam(
            country, city, university, faculty, course, subject, teacher_surname, teacher_name, teacher_middle_name, type)
    VALUES ( 'belarus', 'minsk', 'bsu', 'fpmi', 1, 'Матан', 'Леваков', 'Василий', 'Павлович', 1);*/

/*country*/
INSERT INTO country (code, name)
SELECT 'by', 'Беларусь'
WHERE NOT EXISTS(SELECT code FROM country WHERE code = 'by');

INSERT INTO country (code, name)
SELECT 'ru', 'Россия'
WHERE NOT EXISTS(SELECT code FROM country WHERE code = 'ru');

INSERT INTO country (code, name)
SELECT 'ua', 'Украина'
WHERE NOT EXISTS(SELECT code FROM country WHERE code = 'ua');

INSERT INTO country (code, name)
SELECT 'kz', 'Казахстан'
WHERE NOT EXISTS(SELECT code FROM country WHERE code = 'kz');

/*city*/
INSERT INTO city(code, name, country_id)
SELECT 'minsk', 'Минск', 'by'
WHERE NOT EXISTS(SELECT code FROM city WHERE code = 'minsk');

INSERT INTO city(code, name, country_id)
SELECT 'gomel', 'Гомель', 'by'
WHERE NOT EXISTS(SELECT code FROM city WHERE code = 'gomel');

INSERT INTO city(code, name, country_id)
SELECT 'brest', 'Брест', 'by'
WHERE NOT EXISTS(SELECT code FROM city WHERE code = 'brest');

INSERT INTO city(code, name, country_id)
SELECT 'grodno', 'Гродно', 'by'
WHERE NOT EXISTS(SELECT code FROM city WHERE code = 'grodno');

INSERT INTO city(code, name, country_id)
SELECT 'mogilev', 'Могилёв', 'by'
WHERE NOT EXISTS(SELECT code FROM city WHERE code = 'mogilev');

INSERT INTO city(code, name, country_id)
SELECT 'vitebsk', 'Витебск', 'by'
WHERE NOT EXISTS(SELECT code FROM city WHERE code = 'vitebsk');