package howtopass.baas.service.impl;

import howtopass.baas.dao.ExamDAO;
import howtopass.baas.domain.Exam;
import howtopass.baas.service.ExamService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {

    @Autowired
    ExamDAO examDAO;

    @Transactional
    @Override
    public List<Exam> search(Exam exam){
        List<Exam> exams = examDAO.search(exam);
        for(Exam ex : exams) {
            Hibernate.initialize(ex.getType());
            Hibernate.initialize(ex.getType());
        }
        return exams;
    }

    @Transactional
    @Override
    public Exam exactSearch(Exam exam) {
        return examDAO.exactSearch(exam);
    }

    @Transactional
    @Override
    public Integer add(Exam exam){
        return examDAO.addExam(exam);
    }

    @Transactional
    @Override
    public Exam get(Integer id){
        return examDAO.get(id);
    }
}
