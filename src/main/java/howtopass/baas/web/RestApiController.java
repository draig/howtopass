package howtopass.baas.web;

import howtopass.baas.domain.Exam;
import howtopass.baas.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
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
}
