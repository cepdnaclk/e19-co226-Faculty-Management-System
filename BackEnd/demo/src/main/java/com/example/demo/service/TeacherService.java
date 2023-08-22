package com.example.demo.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.TeacherSaveDTO;
import com.example.demo.entity.Course;
import com.example.demo.entity.Department;
import com.example.demo.entity.Teacher;
import com.example.demo.repo.CourseRepo;
import com.example.demo.repo.DepartmentRepo;
import com.example.demo.repo.TeacherRepo;
import com.example.demo.utill.VarList;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TeacherService {
    
    @Autowired
    private TeacherRepo teacherRepo;

    @Autowired
    private DepartmentRepo departmentRepo;

    @Autowired
    private CourseRepo courseRepo;


    public String saveTeacher(TeacherSaveDTO teacherSaveDTO){
        Teacher teacher = new Teacher();

        teacher.setTeacherID(teacherSaveDTO.getTeacherID());
        teacher.setTeacherName(teacherSaveDTO.getName());

        Department department = departmentRepo.findById(teacherSaveDTO.getDepartmentID()).orElse(null);
        teacher.setDepartment(department);

        //Add this teacher to the related department
        //department.getTeachers().add(teacher);


        Course course1 = courseRepo.findById(teacherSaveDTO.getCourse1ID()).orElse(null);
        Course course2 = courseRepo.findById(teacherSaveDTO.getCourse2ID()).orElse(null);

        Set<Course> courses = new HashSet<>();
        courses.add(course1);
        courses.add(course2);
        teacher.setCourses(courses);

        //Add this teacher to the relavant course
        //course1.getTeachers().add(teacher);
        //course2.getTeachers().add(teacher);

        teacherRepo.save(teacher);

        return VarList.RSP_SUCCESS;

    }

    public Teacher getTeacherByTeacherID(String teacherID){
        return teacherRepo.getTeacherByTeacherID(teacherID);
    }

    public long getTeacherCount(){
        return teacherRepo.count();
    }

    public List<Teacher> getAllTeachers(){
        return teacherRepo.findAll();
    }
}
