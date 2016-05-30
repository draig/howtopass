package howtopass.baas.domain;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Andrew on 4/23/2016.
 */
@Entity
@Table(name = "city")
public class City {
    @Id
    @Column(name = "code")
    private String code;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id", nullable = false)
    private Country country;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "city")
    private List<University> universities;

    @Column(name = "name", length = 32)
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<University> getUniversities() {
        return universities;
    }

    public void setUniversities(List<University> universities) {
        this.universities = universities;
    }
}
