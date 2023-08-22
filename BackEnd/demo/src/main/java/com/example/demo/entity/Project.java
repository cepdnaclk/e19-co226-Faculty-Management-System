package com.example.demo.entity;


import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "project")
public class Project {
    @Id
    @Column(name = "project_id")
    private int projectID;
    @Column(name = "project_name")
    private String projectName;
    @Column(name = "project_description",length = 300)
    private String projectDescription;

    
    @ManyToMany(mappedBy = "projects")
    private Set<student> students= new HashSet<>();
}
