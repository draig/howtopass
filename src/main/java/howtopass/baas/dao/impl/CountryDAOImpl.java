package howtopass.baas.dao.impl;

import howtopass.baas.dao.CountryDAO;
import howtopass.baas.dao.ExamDAO;
import howtopass.baas.domain.Country;
import howtopass.baas.domain.Exam;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CountryDAOImpl implements CountryDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Country> get(){
        return (List<Country>)sessionFactory.getCurrentSession().createCriteria(Country.class).list();
    }
}
