package howtopass.baas.domain;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Andrew on 4/23/2016.
 */
@Entity
@Table(name = "university")
public class University {
    @Column(name = "id")
    @SequenceGenerator(name = "university_id_seq_gen", sequenceName = "university_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "university_id_seq_gen")
    @Id
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "university")
    private List<Faculty> faculties;

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

    public List<Faculty> getFaculties() {
        return faculties;
    }

    public void setFaculties(List<Faculty> faculties) {
        this.faculties = faculties;
    }
}
