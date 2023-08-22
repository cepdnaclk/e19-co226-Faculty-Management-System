package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Teacher;

public interface TeacherRepo extends JpaRepository<Teacher,String>{
    
    public Teacher getTeacherByTeacherID(String teacherID);
}
