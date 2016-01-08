package howtopass.baas.service.impl;

import howtopass.baas.domain.Exam;
import howtopass.baas.service.ExamService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {

    @Override
    public List<Exam> search(Exam exam){
        return null;
    }

    @Override
    public void add(Exam exam){

    }
}
