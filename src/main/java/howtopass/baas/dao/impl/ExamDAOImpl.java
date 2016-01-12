package howtopass.baas.dao.impl;

import howtopass.baas.dao.ExamDAO;
import howtopass.baas.domain.Exam;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Andrew on 1/9/2016.
 */
@Repository
public class ExamDAOImpl implements ExamDAO{
    @Autowired
    private SessionFactory sessionFactory;


    @Override
    public Integer addExam(Exam exam) {
        return (Integer) sessionFactory.getCurrentSession().save(exam);
    }

    @Override
    public List<Exam> searchExam(Exam exam) {
        return sessionFactory.getCurrentSession().createCriteria(Exam.class)
                .add(Restrictions.like("country", exam.getCountry()))
                .add(Restrictions.like("city", exam.getCity()))
                .add(Restrictions.like("univercity", exam.getUnivercity()))
                .add(Restrictions.like("teacherSurname", exam.getTeacherSurname()))
                .add(Restrictions.like("course", exam.getCourse()))
                .add(Restrictions.like("subject", exam.getSubject()))
                .add(Restrictions.like("type", exam.getType()))
                .list();
    }
}
