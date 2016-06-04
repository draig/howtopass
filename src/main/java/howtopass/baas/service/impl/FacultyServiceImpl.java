package howtopass.baas.service.impl;

import howtopass.baas.dao.FacultyDAO;
import howtopass.baas.domain.Faculty;
import howtopass.baas.service.FacultyService;
import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Dashkevich_AD on 03.06.2016.
 */
@Service
public class FacultyServiceImpl implements FacultyService {
    @Autowired
    FacultyDAO facultyDAO;
    @Transactional
    @Override
    public Faculty get(Integer id) {
        Faculty faculty = facultyDAO.get(id);
        Hibernate.initialize(faculty.getUniversity());
        Hibernate.initialize(faculty.getUniversity().getCity());
        Hibernate.initialize(faculty.getUniversity().getCity().getCountry());
        return faculty;
    }
}
