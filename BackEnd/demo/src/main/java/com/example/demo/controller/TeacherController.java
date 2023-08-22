package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TeacherSaveDTO;
import com.example.demo.entity.Course;
import com.example.demo.entity.Department;
import com.example.demo.entity.Teacher;
import com.example.demo.service.CourseService;
import com.example.demo.service.DepartmentService;
import com.example.demo.service.TeacherService;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/teacher")
public class TeacherController {
    
    @Autowired
    private TeacherService teacherService;

    @Autowired
    private DepartmentService departmentService;

    @Autowired
    private CourseService courseService;

    @PostMapping(value = "/saveteacher")
    public TeacherSaveDTO saveTeacher(@RequestBody TeacherSaveDTO teacherSaveDTO){
        teacherService.saveTeacher(teacherSaveDTO);
        return teacherSaveDTO;
    }

    @GetMapping(value = "/getteacher/{teacherID}")
    public Teacher getTeacherByTeacherID(@PathVariable String teacherID){
        return teacherService.getTeacherByTeacherID(teacherID);
    }

    @GetMapping(value = "/getdepartmentbyteacherid/{teacherID}")
    public Department getDepartmentByTeacherID(@PathVariable String teacherID){
        return departmentService.departmentByTeacherID(teacherID);
    }

    @GetMapping(value = "/getcoursesbyteacherid/{teacherID}")
    public List<Course> getCoursesByTeacherID(@PathVariable String teacherID){
        return courseService.getCoursesByTeacherID(teacherID);
    }

    @GetMapping(value = "/getteachercount")
    public long getTeacherCount(){
        return teacherService.getTeacherCount();
    }

    @GetMapping(value = "/getallteachers")
    public List<Teacher> getAllTeachers(){
        return teacherService.getAllTeachers();
    }
}
