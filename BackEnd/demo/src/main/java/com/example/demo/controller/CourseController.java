package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CourseSaveDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.CourseService;
import com.example.demo.utill.VarList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/course")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @Autowired
    ResponseDTO responseDTO;

    @PostMapping(value = "/savecourse")
    public ResponseDTO saveCourse(@RequestBody CourseSaveDTO courseSaveDTO){
        courseService.saveCourse(courseSaveDTO);

        responseDTO.setCode(VarList.RSP_SUCCESS);
        responseDTO.setMessage("Success");
        responseDTO.setContent(courseSaveDTO);
        return responseDTO;
    }
}
