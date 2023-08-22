package com.example.demo.entity;

import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "department")

public class Department {
    
    @Id
    @Column(name = "id")
    private String departmentID;
    @Column(name = "name")
    private String departmentName;


    
    @OneToMany(mappedBy = "department",cascade = CascadeType.PERSIST)
    private Set<Teacher> teachers;

    @OneToMany(mappedBy = "department",cascade = CascadeType.PERSIST)
    private Set<Course> courses;
}
