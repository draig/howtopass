package howtopass.baas.dao;

import howtopass.baas.domain.University;

import java.util.List;

public interface UniversityDAO {
    List<University> get(String cityCode);
}
