package com.example.demo.repo;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Project;

public interface ProjectRepo extends JpaRepository <Project,String> {
    
    List<Project> findByStudentsEnrollmentNo(String enrollmentNo);
}
