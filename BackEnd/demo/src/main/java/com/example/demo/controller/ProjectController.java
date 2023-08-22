package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ProjectDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.ProjectService;
import com.example.demo.utill.VarList;

@RestController
@RequestMapping(value = "api/v1/project")
@CrossOrigin

public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ResponseDTO responseDTO;

    @GetMapping (value = "/getallprojects")
    public ResponseEntity<ResponseDTO> getAllProjects(){
        try{
            List <ProjectDTO> projectDTOList = projectService.getAllproject();
            responseDTO.setCode(VarList.RSP_SUCCESS);
            responseDTO.setMessage("Success");
            responseDTO.setContent(projectDTOList);
            return new ResponseEntity<> (responseDTO, HttpStatus.ACCEPTED);
        }catch (Exception ex){
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity<> (responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/getprojectbyid/{projectID}")
    public ProjectDTO getProjectByID(@PathVariable String projectID){
        return projectService.getProjectByID(projectID);
    }
    
    // Save a project
    @PostMapping(value = "/saveproject")
    public ResponseEntity<ResponseDTO> saveProject(@RequestBody ProjectDTO projectDTO){  //convert  json object to java object
        try{
            String rep = projectService.saveProject(projectDTO);
            
            if(rep.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(projectDTO);
                return new ResponseEntity<> (responseDTO, HttpStatus.ACCEPTED);
            }
            else if(rep.equals("06")){
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Project already registered");
                responseDTO.setContent(projectDTO);
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
    
    @GetMapping(value = "/getprojectcount")
    public long getProjectCount(){
        return projectService.getProjectCount();
    }
}
