package howtopass.baas.domain;

import javax.persistence.*;
import java.util.List;

/**
 * Created by Andrew on 4/23/2016.
 */
@Entity
@Table(name = "country")
public class Country {
    @Column(name = "code")
    @Id
    private String code;

    @Column(name = "name", length = 32)
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "country")
    private List<City> cities;

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

    public List<City> getCities() {
        return cities;
    }

    public void setCities(List<City> cities) {
        this.cities = cities;
    }
}
