package howtopass.baas.dao.impl;

import howtopass.baas.dao.CityDAO;
import howtopass.baas.dao.CountryDAO;
import howtopass.baas.domain.City;
import howtopass.baas.domain.Country;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CityDAOImpl implements CityDAO {
    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<City> get(String countryCode){
        Country country = (Country)sessionFactory.getCurrentSession()
                .createCriteria(Country.class)
                .add(Restrictions.eq("code", countryCode))
                .list().get(0);
        return country.getCities();
    }
}
