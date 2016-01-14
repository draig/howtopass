package howtopass.baas.web;

import howtopass.baas.domain.Exam;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
public class UiController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String searchPage() {
        return "search";
    }

    @RequestMapping(value = "/search", method = RequestMethod.POST)
    public String search(@RequestBody Exam exam) {
        System.out.println(exam);
        return "index";
    }
}
