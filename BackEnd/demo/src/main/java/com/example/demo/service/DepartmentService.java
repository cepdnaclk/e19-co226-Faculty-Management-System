package com.example.demo.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.DepartmentSaveDTO;
import com.example.demo.entity.Department;
import com.example.demo.repo.DepartmentRepo;
import com.example.demo.utill.VarList;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class DepartmentService {
    @Autowired
    private DepartmentRepo departmentRepo;

    @Autowired
    private ModelMapper modelMapper;
    
    //save department
    public String saveDepartment(DepartmentSaveDTO departmentSaveDTO){
        if (departmentRepo.existsById(departmentSaveDTO.getDepartmentID())){  //check where there is going to save existing object
            return VarList.RSP_DUPLICATED;
        }
        else{
            departmentRepo.save(modelMapper.map(departmentSaveDTO, Department.class));
            return VarList.RSP_SUCCESS;
        }
    }

    public Department departmentByTeacherID(String teacherID){
        return departmentRepo.findByTeachersTeacherID(teacherID);
    }
    
}
