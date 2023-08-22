package com.example.demo.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.student;

public interface StudentRepo extends JpaRepository <student,String> {
    
    
    student getStudentByenrollmentNo(String enrollmentNo);      //take the first argument as the Eno.

    // if there is update query use @Modifing anotation instead of @Query
    
}
