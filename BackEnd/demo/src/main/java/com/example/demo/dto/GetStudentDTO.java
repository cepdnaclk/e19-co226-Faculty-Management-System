package com.example.demo.dto;

import java.util.Set;

import com.example.demo.entity.Course;
import com.example.demo.entity.Project;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GetStudentDTO {
    
    private String enrollmentNo;
    private String firstName;
    private String lastName;
    private String address;
    private String sclass;
    private String sex;

    private Set<Course> courses;

    private Set<Project> projects;
}
