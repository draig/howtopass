package howtopass.baas.dao;

import howtopass.baas.domain.Exam;

import java.util.List;

public interface ExamDAO {

    public Integer addExam(Exam exam);

    public List<Exam> searchExam(Exam exam);
}
