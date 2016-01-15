package howtopass.baas.service;

import howtopass.baas.domain.Exam;

import java.util.List;

public interface ExamService {

    List<Exam> search(Exam exam);

    Exam exactSearch(Exam exam);

    Integer add(Exam exam);

    Exam get(Integer id);
}
