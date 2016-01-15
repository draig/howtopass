package howtopass.baas.dao;

import howtopass.baas.domain.Exam;

import java.util.List;

public interface ExamDAO {

    Integer addExam(Exam exam);

    List<Exam> search(Exam exam);

    Exam exactSearch(Exam exam);

    Exam get(Integer id);
}
