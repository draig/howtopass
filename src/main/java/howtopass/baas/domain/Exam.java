package howtopass.baas.domain;

import javax.persistence.*;

@Entity
@Table(name = "exam")
public class Exam {

    @Column(name = "id")
    @SequenceGenerator(name = "exam_id_seq_gen", sequenceName = "exam_id_seq")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "exam_id_seq_gen")
    @Id
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "faculty_id", nullable = false)
    private Faculty faculty;

    @Transient
    private Integer facultyId;

    @Column(name = "teacher_surname", length = 32)
    private String teacherSurname;

    @Column(name = "subject", length = 256)
    private String subject;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_id", nullable = false)
    private Type type;

    @Transient
    private String typeId;

    public Exam() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Faculty getFaculty() {
        return faculty;
    }

    public void setFaculty(Faculty faculty) {
        this.faculty = faculty;
    }

    public String getTeacherSurname() {
        return teacherSurname;
    }

    public void setTeacherSurname(String teacherSurname) {
        this.teacherSurname = teacherSurname;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getTypeId() {
        return typeId;
    }

    public void setTypeId(String typeId) {
        this.typeId = typeId;
    }

    public Integer getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(Integer facultyId) {
        this.facultyId = facultyId;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) return false;
        if (getClass() != obj.getClass()) return false;
        final Exam other = (Exam) obj;
        if(this.getId() == null || other.getId() == null || !this.getId().equals(other.getId())) {
            return false;
        }
        return true;
    }

    @Override
    public int hashCode() {
        return this.id == null ? 0 : this.id.hashCode();
    }

    public String toQueryString() {
        return
                "teacherSurname=" + teacherSurname +
                "&subject=" + subject +
                "&facultyId=" + facultyId +
                "&typeId=" + typeId;
    }

}
