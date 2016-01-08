package howtopass.baas.dao;

import howtopass.baas.domain.Exam;

import java.util.List;

public interface ExamDAO {

    public void addExam(Exam exam);

    public List<Exam> searchExam(Exam exam);
}
