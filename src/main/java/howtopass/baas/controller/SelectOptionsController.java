package howtopass.baas.controller;

import howtopass.baas.domain.Exam;
import howtopass.baas.dto.SelectOptionsDTO;
import howtopass.baas.service.ExamService;
import howtopass.baas.service.SelectOptionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/how-to-pass")
public class SelectOptionsController {

    @Autowired
    private ExamService examService;
    @Autowired
    private SelectOptionsService optionsService;

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public @ResponseBody List<Exam> search(@RequestBody Exam searchExam) {
        return examService.search(searchExam);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.OK)
    public void add(@RequestBody Exam exam) {
        examService.add(exam);
    }

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> country() {
        return optionsService.country();
    }

    @RequestMapping(value = "/city", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> city(@RequestParam("country") String countryId) {
        return optionsService.city(countryId);
    }

    @RequestMapping(value = "/university", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> university(@RequestParam("country") String countryCode,
                                                           @RequestParam("city") String cityCode) {
        return optionsService.university(cityCode);
    }

    @RequestMapping(value = "/faculty", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> faculty(@RequestParam("country") String countryCode,
                                                           @RequestParam("city") String cityCode,
                                                           @RequestParam("university") String universityId) {
        return optionsService.faculty(universityId);
    }


}
