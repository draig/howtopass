package howtopass.baas.dto;

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
