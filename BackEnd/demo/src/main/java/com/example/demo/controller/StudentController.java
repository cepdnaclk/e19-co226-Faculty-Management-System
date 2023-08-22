package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.StudentSaveDTO;
import com.example.demo.dto.studentDTO;
import com.example.demo.entity.Course;
import com.example.demo.entity.Project;
import com.example.demo.entity.student;
import com.example.demo.repo.StudentRepo;
import com.example.demo.service.CourseService;
import com.example.demo.service.ProjectService;
import com.example.demo.service.StudentService;
import com.example.demo.utill.VarList;

@RestController
@RequestMapping (value = "api/v1/student")
@CrossOrigin

public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private CourseService courseService;

    @Autowired
    private ResponseDTO responseDTO;
    
    @GetMapping (value = "/getallstudents")
    public ResponseEntity<ResponseDTO> getAllStudent(){
        try{
            List <studentDTO> studentDTOList = studentService.getAllStudent();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success");
            responseDTO.setContent(studentDTOList);
            return new ResponseEntity<> (responseDTO, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity<> (responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping (value = "/savestudent")
    public ResponseEntity<ResponseDTO> saveStudent(@RequestBody StudentSaveDTO studentSaveDTO){  //convert  json object to java object
        try{
            String rep = studentService.saveStudent(studentSaveDTO);
            
            if(rep.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentSaveDTO);
                return new ResponseEntity<> (responseDTO, HttpStatus.ACCEPTED);
            }
            else if(rep.equals("06")){
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Student already registered");
                responseDTO.setContent(studentSaveDTO);
                return new ResponseEntity<> (responseDTO, HttpStatus.BAD_REQUEST);
            }
            else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity<> (responseDTO, HttpStatus.BAD_REQUEST);
            }
        }catch(Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity<> (responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*@PutMapping (value = "/updatestudent")
    public ResponseEntity <ResponseDTO> updateStudent (@RequestBody studentDTO studentDTO){
        try{
            String rep = studentService.updateStudent(studentDTO);
            
            if(rep.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(studentDTO);
                return new ResponseEntity<> (responseDTO, HttpStatus.ACCEPTED);
            }
            else if(rep.equals("01")){
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Not a registered student");
                responseDTO.setContent(studentDTO);
                return new ResponseEntity<> (responseDTO, HttpStatus.BAD_REQUEST);
            }
            else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity<> (responseDTO, HttpStatus.BAD_REQUEST);
            }
        }catch(Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity<> (responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/


    @DeleteMapping (value = "/deletestudent")
    public boolean deleteStudent(@RequestBody studentDTO studentDTO){
        return studentService.deleteStudent(studentDTO);
    }

    @GetMapping ("/getstudentbyid/{enrollmentNo}")
    public student getStudentByEnrollmentNo(@PathVariable String enrollmentNo){
        return studentService.getStudentBYEnrollmentNO(enrollmentNo);
    }


    @GetMapping("/getprojects/{enrollmentNo}")
    public List<Project> getProjectsByEnrollmentNo(@PathVariable String enrollmentNo){
        return projectService.getProjectsByEnrollmentNo(enrollmentNo);
    }

    @GetMapping("/getcourses/{enrollmentNo}")
    public List<Course> getProjectByEnrollmentNo(@PathVariable String enrollmentNo){
        return courseService.getCoursesByEnrollmentNo(enrollmentNo);
    }

    @GetMapping("/getstudentcount")
    public long getStudentCount(){
        return studentService.getStudentCount();
    }

    @Autowired
    private StudentRepo studentRepo;
    @GetMapping("/getstudents")
    public List<student> getStud(){
        return studentRepo.findAll();
    }
}
