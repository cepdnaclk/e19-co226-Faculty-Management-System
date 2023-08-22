package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CourseSaveDTO;
import com.example.demo.entity.Course;
import com.example.demo.entity.Department;
import com.example.demo.repo.CourseRepo;
import com.example.demo.repo.DepartmentRepo;
import com.example.demo.utill.VarList;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CourseService {
    
    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private DepartmentRepo departmentRepo;

    public String saveCourse(CourseSaveDTO courseSaveDTO){
        Course course= new Course();
        course.setCourseID(courseSaveDTO.getCourseID());
        course.setCourseName(courseSaveDTO.getCourseName());
        String deparmentID = courseSaveDTO.getDepartmentID();
        Department department = departmentRepo.findById(deparmentID).orElse(null);
        course.setDepartment(department);

        //set this course to the related department
        //department.getCourses().add(course);
        courseRepo.save(course);

        return VarList.RSP_SUCCESS;
    }

    public List<Course> getCoursesByEnrollmentNo(String enrollmentNo){
        return courseRepo.findByStudentsEnrollmentNo(enrollmentNo);
    }

    public List<Course> getCoursesByTeacherID(String teacherID){
        return courseRepo.findByTeachersTeacherID(teacherID);
    }
}
