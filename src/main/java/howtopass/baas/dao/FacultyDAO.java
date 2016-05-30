package howtopass.baas.dao;

import howtopass.baas.domain.Faculty;
import howtopass.baas.domain.University;

import java.util.List;

public interface FacultyDAO {
    List<Faculty> get(String universityId);
}
