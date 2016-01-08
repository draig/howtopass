package howtopass.baas.service;

import howtopass.baas.domain.Exam;

import java.util.List;

public interface ExamService {

    public List<Exam> search(Exam exam);

    public void add(Exam exam);
}
