package howtopass.baas.dto;

import howtopass.baas.domain.*;

/**
 * Created by Andrew on 4/23/2016.
 */
public class SelectOptionsDTO {
    private String text;
    private String value;

    public SelectOptionsDTO() {
    }

    public SelectOptionsDTO(String value, String text) {
        this.text = text;
        this.value = value;
    }

    public SelectOptionsDTO(Country country) {
        this.text = country.getName();
        this.value = country.getCode();
    }

    public SelectOptionsDTO(City city) {
        this.text = city.getName();
        this.value = city.getCode();
    }

    public SelectOptionsDTO(University university) {
        this.text = university.getName();
        this.value = university.getId().toString();
    }

    public SelectOptionsDTO(Faculty faculty) {
        this.text = faculty.getName();
        this.value = faculty.getId().toString();
    }

    public SelectOptionsDTO(Type type) {
        this.text = type.getName();
        this.value = type.getId();
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
