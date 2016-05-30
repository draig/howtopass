package howtopass.baas.dao.impl;

import howtopass.baas.dao.CityDAO;
import howtopass.baas.dao.UniversityDAO;
import howtopass.baas.domain.City;
import howtopass.baas.domain.Country;
import howtopass.baas.domain.University;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UniversityDAOImpl implements UniversityDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<University> get(String cityCode){
        City city = (City)sessionFactory.getCurrentSession()
                .createCriteria(City.class)
                .add(Restrictions.eq("code", cityCode))
                .list().get(0);
        return city.getUniversities();
    }
}
