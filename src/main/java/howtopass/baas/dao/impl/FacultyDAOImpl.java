package howtopass.baas.dao.impl;

import howtopass.baas.dao.FacultyDAO;
import howtopass.baas.domain.Faculty;
import howtopass.baas.domain.University;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FacultyDAOImpl implements FacultyDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Faculty> getByUniversity(Integer universityId){
        University university = (University)sessionFactory.getCurrentSession()
                .createCriteria(University.class)
                .add(Restrictions.eq("id", universityId))
                .list().get(0);
        return university.getFaculties();
    }

    @Override
    public Faculty get(Integer facultyId) {
        return  (Faculty)sessionFactory.getCurrentSession()
                .createCriteria(Faculty.class)
                .add(Restrictions.eq("id", facultyId))
                .uniqueResult();
    }
}
