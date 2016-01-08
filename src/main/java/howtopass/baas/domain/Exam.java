package howtopass.baas.domain;

import javax.persistence.*;

@Entity
@Table(name = "exam")
public class Exam {

    @Id
    @Column(name = "id")
    @GeneratedValue
    private Integer id;

    @Column(name = "univercity", length = 256)
    private String univercity;

    @Column(name = "country", length = 128)
    private String country;

    @Column(name = "city", length = 128)
    private String city;

    @Column(name = "faculty", length = 256)
    private String faculty;

    @Column(name = "teacher_name", length = 32)
    private String teacherName;

    @Column(name = "teacher_surname", length = 32)
    private String teacherSurname;

    @Column(name = "teacher_middle_name", length = 32)
    private String teacherMiddleName;

    @Column(name = "course")
    private Integer course;

    @Column(name = "subject", length = 256)
    private String subject;

    @Column(name = "type")
    private Integer type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUnivercity() {
        return univercity;
    }

    public void setUnivercity(String univercity) {
        this.univercity = univercity;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getFaculty() {
        return faculty;
    }

    public void setFaculty(String faculty) {
        this.faculty = faculty;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getTeacherSurname() {
        return teacherSurname;
    }

    public void setTeacherSurname(String teacherSurname) {
        this.teacherSurname = teacherSurname;
    }

    public String getTeacherMiddleName() {
        return teacherMiddleName;
    }

    public void setTeacherMiddleName(String teacherMiddleName) {
        this.teacherMiddleName = teacherMiddleName;
    }

    public Integer getCourse() {
        return course;
    }

    public void setCourse(Integer course) {
        this.course = course;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
