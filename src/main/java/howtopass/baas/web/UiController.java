package howtopass.baas.web;

import howtopass.baas.domain.Exam;
import howtopass.baas.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
public class UiController {
    @Autowired
    ExamService examService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String searchPage() {
        return "search";
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    public String search(@ModelAttribute Exam exam, Model model) {
        Exam exactMatch = examService.exactSearch(exam);
        if(exactMatch != null) {
            //model.addAttribute("exam", exactMatch);
            return "redirect:/feedback?id=" + exactMatch.getId();
        }
        model.addAttribute("exams", examService.search(exam));
        return "result";
    }

    @RequestMapping(value = "/feedback", method = RequestMethod.GET)
    public String searchPage(@RequestParam("id") Integer id) {
        System.out.print(id);
        return "feedback";
    }
}
