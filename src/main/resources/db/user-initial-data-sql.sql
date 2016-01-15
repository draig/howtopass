CREATE SEQUENCE exam_id_seq
  INCREMENT 1
  MINVALUE 10000
  NO MAXVALUE
  START 10000
  CACHE 1;

INSERT INTO exam(
            country, city, university, faculty, course, subject, teacher_surname, teacher_name, teacher_middle_name, type)
    VALUES ( 'belarus', 'minsk', 'bsu', 'fpmi', 1, 'Матан', 'Леваков', 'Василий', 'Павлович', 1);
