package com.example.demo.service;


import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.StudentSaveDTO;
import com.example.demo.dto.studentDTO;
import com.example.demo.entity.Course;
import com.example.demo.entity.Project;
import com.example.demo.entity.student;
import com.example.demo.repo.CourseRepo;
import com.example.demo.repo.ProjectRepo;
import com.example.demo.repo.StudentRepo;
import com.example.demo.utill.VarList;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentService {
    
    @Autowired
    private StudentRepo studentRepo;

    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private CourseRepo courseRepo;

    @Autowired
    private ModelMapper modelMapper;

    // get all student service
    public List<studentDTO> getAllStudent(){
        List<student> studentList = studentRepo.findAll();
        return modelMapper.map(studentList, new TypeToken<ArrayList<studentDTO>>(){
        }.getType());
    }

    public String saveStudent(StudentSaveDTO studentSaveDTO){
        if (studentRepo.existsById(studentSaveDTO.getEnrollmentNo())){  //check where there is going to save existing object
            return VarList.RSP_DUPLICATED;
        }
        else{

            student student = modelMapper.map(studentSaveDTO, student.class);
            
            // add projects to project set
            Set<Project> projects = new HashSet<>();
            Project project1 = projectRepo.findById(studentSaveDTO.getProject1ID()).orElse(null);
            Project project2 = projectRepo.findById(studentSaveDTO.getProject2ID()).orElse(null);
            projects.add(project1);
            projects.add(project2);

            student.setProjects(projects);

            // Set the courses for student
            Set<Course> courses = new HashSet<>();
            Course course1 = courseRepo.findById(studentSaveDTO.getCourse1ID()).orElse(null);
            Course course2 = courseRepo.findById(studentSaveDTO.getCourse2ID()).orElse(null);
            Course course3 = courseRepo.findById(studentSaveDTO.getCourse3ID()).orElse(null);
            courses.add(course1);
            courses.add(course2);
            courses.add(course3);

            student.setCourses(courses);

            studentRepo.save(student);
            return VarList.RSP_SUCCESS;
        }
    }

    /*public String updateStudent (studentDTO studentDTO){
        if (studentRepo.existsById(stu.getEnrollmentNo())){
            studentRepo.save(modelMapper.map(studentDTO,student.class));
            return VarList.RSP_SUCCESS;
        }
        else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }*/
    
    

    public boolean deleteStudent(studentDTO studentDTO){
        studentRepo.delete(modelMapper.map(studentDTO,student.class));
        return true;
    }

    // native sql query

    // select * from student where enrollment_no = 452
    public student getStudentBYEnrollmentNO(String enrollmentNo){
        student student = studentRepo.getStudentByenrollmentNo(enrollmentNo);
        return student;
    }

    public long getStudentCount(){
        return studentRepo.count();
    }
}
