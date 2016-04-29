package howtopass.baas.web;

import howtopass.baas.domain.Exam;
import howtopass.baas.dto.SelectOptionsDTO;
import howtopass.baas.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/how-to-pass")
public class RestApiController {

    @Autowired
    private ExamService examService;

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
        List selectOptions = new ArrayList(){
            {
                add(new SelectOptionsDTO("russia", "Россия"));
                add(new SelectOptionsDTO("ukraine", "Украина"));
                add(new SelectOptionsDTO("belarus", "Беларусь"));
                add(new SelectOptionsDTO("kazakhstan", "Казахстан"));
            }
        };
        return selectOptions;
    }

    @RequestMapping(value = "/city", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> city(@RequestParam("country") String country) {
        List selectOptions = new ArrayList(){
            {
                add(new SelectOptionsDTO("minsk", "Минск"));
                add(new SelectOptionsDTO("gomel", "Гомель"));
                add(new SelectOptionsDTO("vitebsk", "Витебск"));
                add(new SelectOptionsDTO("brest", "Брест"));
                add(new SelectOptionsDTO("grodno", "Гродно"));
                add(new SelectOptionsDTO("mogilev", "Могилёв"));
            }
        };
        return selectOptions;
    }

    @RequestMapping(value = "/university", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> university(@RequestParam("country") String country,
                                                           @RequestParam("city") String city) {
        List selectOptions = new ArrayList(){
            {
                add(new SelectOptionsDTO("bsu", "БГУ"));
                add(new SelectOptionsDTO("bgmu", "БГМУ"));
                add(new SelectOptionsDTO("bsuir", "БГУИР"));
                add(new SelectOptionsDTO("mitso", "МИТСО"));
                add(new SelectOptionsDTO("maxTankBgpu", "БГПУ им. М.Танка"));
                add(new SelectOptionsDTO("mglu", "МГЛУ"));
            }
        };
        return selectOptions;
    }

    @RequestMapping(value = "/faculty", method = RequestMethod.GET)
    public @ResponseBody List<SelectOptionsDTO> faculty(@RequestParam("country") String country,
                                                           @RequestParam("city") String city,
                                                           @RequestParam("university") String university) {
        List selectOptions = new ArrayList(){
            {
                add(new SelectOptionsDTO("fpmi", "ФПМИ"));
                add(new SelectOptionsDTO("bio", "Биологический"));
                add(new SelectOptionsDTO("chem", "Химический"));
                add(new SelectOptionsDTO("journ", "Институт журналистики"));
                add(new SelectOptionsDTO("machmat", "Механнико-математический"));
                add(new SelectOptionsDTO("law", "Юридический"));
            }
        };
        return selectOptions;
    }


}
