package howtopass.baas.dao;

import howtopass.baas.domain.Faculty;

import java.util.List;

public interface FacultyDAO {
    List<Faculty> getByUniversity(Integer universityId);
    Faculty get(Integer facultyId);
}
