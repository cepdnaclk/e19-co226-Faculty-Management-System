package com.example.demo.entity;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
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
@Table(name = "teacher")
public class Teacher {

    @Id
    @Column(name = "id")
    String teacherID;
    @Column(name = "name")
    String teacherName;
    

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "deparment_fk")
    private Department department;

    /*@ManyToMany(mappedBy = "teachers",cascade = CascadeType.PERSIST)
    private Set<Course> courses= new HashSet<>();*/

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(
        name = "teacher_course",
        joinColumns = @JoinColumn(name = "teacher_id"),
        inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    private Set<Course> courses = new HashSet<>();
}
