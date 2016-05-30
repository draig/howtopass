package howtopass.baas.service.impl;

import howtopass.baas.dao.*;
import howtopass.baas.domain.*;
import howtopass.baas.dto.SelectOptionsDTO;
import howtopass.baas.service.SelectOptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Andrew on 5/27/2016.
 */
@Service
public class SelectOptionsServiceImpl implements SelectOptionsService {
    @Autowired
    CountryDAO countryDAO;
    @Autowired
    CityDAO cityDAO;
    @Autowired
    UniversityDAO universityDAO;
    @Autowired
    FacultyDAO facultyDAO;
    @Autowired
    TypeDAO typeDAO;

    @Transactional
    @Override
    public List<SelectOptionsDTO> country() {
        List<Country> countries = countryDAO.get();
        List<SelectOptionsDTO> selectOptions = new ArrayList<SelectOptionsDTO>();
        for(Country country : countries) {
            selectOptions.add(new SelectOptionsDTO(country));
        }
        return selectOptions;
    }

    @Transactional
    @Override
    public List<SelectOptionsDTO> city(String countryCode) {
        List<City> cities = cityDAO.get(countryCode);
        List<SelectOptionsDTO> selectOptions = new ArrayList<SelectOptionsDTO>();
        for(City city : cities) {
            selectOptions.add(new SelectOptionsDTO(city));
        }
        return selectOptions;
    }

    @Transactional
    @Override
    public List<SelectOptionsDTO> university(String cityCode) {
        List<University> universities = universityDAO.get(cityCode);
        List<SelectOptionsDTO> selectOptions = new ArrayList<SelectOptionsDTO>();
        for(University university : universities) {
            selectOptions.add(new SelectOptionsDTO(university));
        }
        return selectOptions;
    }

    @Transactional
    @Override
    public List<SelectOptionsDTO> faculty(String universityId) {
        List<Faculty> faculties = facultyDAO.get(universityId);
        List<SelectOptionsDTO> selectOptions = new ArrayList<SelectOptionsDTO>();
        for(Faculty faculty : faculties) {
            selectOptions.add(new SelectOptionsDTO(faculty));
        }
        return selectOptions;
    }

    @Transactional
    @Override
    public List<SelectOptionsDTO> type() {
        List<Type> types = typeDAO.get();
        List<SelectOptionsDTO> selectOptions = new ArrayList<SelectOptionsDTO>();
        for(Type type : types) {
            selectOptions.add(new SelectOptionsDTO(type));
        }
        return selectOptions;
    }
}
