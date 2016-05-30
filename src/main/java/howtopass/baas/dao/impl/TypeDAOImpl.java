package howtopass.baas.dao.impl;

import howtopass.baas.dao.FacultyDAO;
import howtopass.baas.dao.TypeDAO;
import howtopass.baas.domain.Faculty;
import howtopass.baas.domain.Type;
import howtopass.baas.domain.University;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TypeDAOImpl implements TypeDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Type> get(){
        return (List<Type>)sessionFactory.getCurrentSession()
                .createCriteria(Type.class)
                .list();
    }
}
