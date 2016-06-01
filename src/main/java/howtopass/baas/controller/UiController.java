package howtopass.baas.controller;

import howtopass.baas.domain.Exam;
import howtopass.baas.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriUtils;

import java.io.IOException;


@Controller
public class UiController {
    @Autowired
    ExamService examService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "redirect:/search";
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
     public String searchPage() {
        return "search";
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    public @ResponseBody Redirect search(@ModelAttribute Exam exam, Model model) throws Exception {
        Exam exactMatch = examService.exactSearch(exam);
        if(exactMatch != null) {
            return new Redirect("feedback?id=" + exactMatch.getId());
        }
        return new Redirect("result?" + UriUtils.encodeQuery(exam.toQueryString(), "UTF-8"));
        /*if(exactMatch != null) {
            //model.addAttribute("exam", exactMatch);
            return "redirect:/feedback?id=" + exactMatch.getId();
        }
        model.addAttribute("exams", examService.search(exam));
        try {
            model.addAttribute("createQuery", UriUtils.encodeQuery(exam.toQueryString(), "UTF-8"));
        } catch (IOException exception) {
            System.out.println(exception.getMessage());
        }
        return "result";*/
    }

    class Redirect {
        String location;

        Redirect(String location) {
            this.location = location;
        }

        public String getLocation() {
            return location;
        }

        public void setLocation(String location) {
            this.location = location;
        }
    }

    @RequestMapping(value = "/feedback", method = RequestMethod.GET)
    public String searchPage(@RequestParam("id") Integer id, Model model) {
        model.addAttribute("exam", examService.get(id));
        return "feedback";
    }

    @RequestMapping(value = "/create", method = RequestMethod.GET)
    public String createPage() {
        return "create";
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public String create(@ModelAttribute Exam exam) {
        Integer examId;
        Exam exactMatch = examService.exactSearch(exam);
        if(exactMatch != null) {
            examId = exactMatch.getId();
        } else {
            examId = examService.add(exam);
        }
        return "redirect:/feedback?id=" + examId;
    }
}