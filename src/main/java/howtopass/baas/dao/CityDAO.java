package howtopass.baas.dao;

import howtopass.baas.domain.City;
import howtopass.baas.domain.University;

import java.util.List;

public interface CityDAO {

    List<City> get(String countryCode);

    interface UniversityDAO {
        List<University> get(String cityId);
    }
}
