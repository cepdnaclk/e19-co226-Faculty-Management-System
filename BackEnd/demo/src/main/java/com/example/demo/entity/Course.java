package com.example.demo.entity;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "course")
public class Course {
    
    @Id
    @Column(name = "id")
    private String courseID;
    @Column(name = "name")
    private String courseName;



    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "deparment_fk")
    private Department department;

    /*@ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
        name = "course_teacher",
        joinColumns = @JoinColumn(name = "course_id"),
        inverseJoinColumns = @JoinColumn(name = "teacher_id")
    )
    private Set<Teacher> teachers = new HashSet<>();*/

    @ManyToMany(mappedBy = "courses",cascade = CascadeType.PERSIST)
    private Set<Teacher> teachers= new HashSet<>();


    @ManyToMany(mappedBy = "courses",cascade = CascadeType.PERSIST)
    private Set<student> students= new HashSet<>();

    public void setDepartment(Department department){
        this.department = department;
    }
}
