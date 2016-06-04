/*CREATE SEQUENCE exam_id_seq
  INCREMENT 1
  MINVALUE 10000
  NO MAXVALUE
  START 10000
  CACHE 1;*/

/*INSERT INTO exam(
            country, city, university, faculty, course, subject, teacher_surname, teacher_name, teacher_middle_name, type)
    VALUES ( 'belarus', 'minsk', 'bsu', 'fpmi', 1, 'Матан', 'Леваков', 'Василий', 'Павлович', 1);*/

/* country */
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

/* city */
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

/* university */
INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'ГГМУ', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'ГГМУ' AND city_id='gomel');

INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'ГГТУ им. П.О. Сухого', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'ГГТУ им. П.О. Сухого' AND city_id='gomel');

INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'ГГУ им. Ф. Скорины', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel');

INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'БТЭУ ПК', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'БТЭУ ПК' AND city_id='gomel');

INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'БулГУТ', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'БулГУТ' AND city_id='gomel');

INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'МИТСО (филиал)', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'МИТСО (филиал)' AND city_id='gomel');

INSERT INTO university(id, name, city_id)
SELECT nextval('university_id_seq'), 'ГИИ МЧС РБ', 'gomel'
WHERE NOT EXISTS(SELECT id FROM university WHERE name = 'ГИИ МЧС РБ' AND city_id='gomel');

/* faculty */
INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Биологический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Биологический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Геолого-географический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Геолого-географический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Исторический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Исторический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Математический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Математический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Иностранных языков', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Иностранных языков'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Психологии и педагогики', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Психологии и педагогики'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Физический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Физический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Филологический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Филологический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Экономический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Экономический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

INSERT INTO faculty(id, name, university_id)
  SELECT nextval('faculty_id_seq'), 'Юридический', (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel')
  WHERE NOT EXISTS(SELECT id FROM faculty WHERE name = 'Юридический'
                                                AND university_id IN (SELECT id FROM university WHERE name = 'ГГУ им. Ф. Скорины' AND city_id='gomel'));

/* type */
INSERT INTO type (id, name)
  SELECT 'exam', 'Экзамен'
  WHERE NOT EXISTS(SELECT id FROM type WHERE id = 'exam');

INSERT INTO type (id, name)
  SELECT 'credit', 'Зачёт'
  WHERE NOT EXISTS(SELECT id FROM type WHERE id = 'credit');

/*
INSERT INTO exam(
            id, faculty_id, type_id, subject, teacher_surname)
    VALUES (nextval('exam_id_seq'), 4, 'exam', 'математический анализ', 'леваков');
 */