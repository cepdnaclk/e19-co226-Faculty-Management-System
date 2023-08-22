package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.DepartmentSaveDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.DepartmentService;
import com.example.demo.utill.VarList;

@RestController
@CrossOrigin
@RequestMapping(value = "api/v1/department")
public class DepartmentController {

    @Autowired
    private ResponseDTO responseDTO;

    @Autowired
    private DepartmentService departmentService;
    
    @PostMapping(value = "/savedepartment")
    public ResponseEntity<ResponseDTO> saveDepartment(@RequestBody DepartmentSaveDTO departmentsaveDTO){  //convert  json object to java object
        try{
            String rep = departmentService.saveDepartment(departmentsaveDTO);
            
            if(rep.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(departmentsaveDTO);
                return new ResponseEntity<> (responseDTO, HttpStatus.ACCEPTED);
            }
            else if(rep.equals("06")){
                responseDTO.setCode(VarList.RSP_DUPLICATED);
                responseDTO.setMessage("Department already registered");
                responseDTO.setContent(departmentsaveDTO);
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
        
}
