package howtopass.baas.domain;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Andrew on 4/23/2016.
 */
@Entity
@Table(name = "faculty")
public class Faculty {
    @Column(name = "id")
    @SequenceGenerator(name = "faculty_id_seq_gen", sequenceName = "faculty_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "faculty_id_seq_gen")
    @Id
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "university_id", nullable = false)
    private University university;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "exam")
    private List<Exam> exams;

    @Column(name = "name", length = 32)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    @Override
    public String toString() {
        return id != null ? id.toString() : "";
    }
}
