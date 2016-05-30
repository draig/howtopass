package howtopass.baas.service;

import howtopass.baas.dto.SelectOptionsDTO;

import java.util.List;

/**
 * Created by Andrew on 5/27/2016.
 */
public interface SelectOptionsService {
    List<SelectOptionsDTO> country();

    List<SelectOptionsDTO> city(String countryCode);

    List<SelectOptionsDTO> university(String cityCode);

    List<SelectOptionsDTO> faculty(String universityId);

    List<SelectOptionsDTO> type();
}
