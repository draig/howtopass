package howtopass.baas.dao.impl;

import howtopass.baas.dao.ExamDAO;
import howtopass.baas.domain.Exam;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ExamDAOImpl implements ExamDAO{
    @Autowired
    private SessionFactory sessionFactory;


    @Override
    public Integer addExam(Exam exam) {
        return (Integer) sessionFactory.getCurrentSession().save(exam);
    }

    @Override
    public List<Exam> search(Exam exam) {
        List<Exam> searchResult = new ArrayList<Exam>();
        searchResult.addAll(sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.eq("teacherSurname", exam.getTeacherSurname()))
                .add(Restrictions.eq("subject", exam.getSubject()))
                .list());

        searchResult.addAll(sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.eq("teacherSurname", exam.getTeacherSurname()))
                .list());

        searchResult.addAll(sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.eq("teacherSurname", exam.getTeacherSurname()))
                .add(Restrictions.eq("subject", exam.getSubject()))
                .list());

        searchResult.addAll(sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.eq("teacherSurname", exam.getTeacherSurname()))
                .list());

        searchResult.addAll(sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.eq("subject", exam.getSubject()))
                .list());

        return  removeDuplicate(searchResult);
    }

    @Override
    public Exam exactSearch(Exam exam) {
        List<Exam> searchResult = sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.eq("teacherSurname", exam.getTeacherSurname()))
                .add(Restrictions.eq("subject", exam.getSubject()))
                .add(Restrictions.eq("type.id", exam.getTypeId()))
                .add(Restrictions.eq("faculty.id", exam.getFacultyId()))
                .list();
        if(searchResult.size() != 1){
            return null;
        }
        return searchResult.get(0);
    }

    @Override
    public Exam get(Integer id) {
        return (Exam)sessionFactory.getCurrentSession().createCriteria(Exam.class).add(Restrictions.eq("id", id))
                .list().get(0);
    }

    private List<Exam> removeDuplicate(List<Exam> exams) {
        for(int i = 0; i < exams.size(); ++i) {
            for(int j = i + 1; j < exams.size(); ++j) {
                if(exams.get(i).equals(exams.get(j))) {
                    exams.remove(j);
                }
            }
        }
        return  exams;
    }
}
