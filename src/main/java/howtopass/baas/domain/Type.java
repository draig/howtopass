package howtopass.baas.domain;

import javax.persistence.*;

/**
 * Created by Andrew on 4/23/2016.
 */
@Entity
@Table(name = "type")
public class Type {
    @Column(name = "id", length = 8)
    @Id
    private String id;

    @Column(name = "name", length = 32)
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return id != null ? id.toString() : "";
    }
}
