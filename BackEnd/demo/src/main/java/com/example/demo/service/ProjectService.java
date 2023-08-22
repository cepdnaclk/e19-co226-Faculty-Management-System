package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.dto.ProjectDTO;
import com.example.demo.entity.Project;
import com.example.demo.repo.ProjectRepo;
import com.example.demo.utill.VarList;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class ProjectService {
    
    @Autowired
    private ProjectRepo projectRepo;

    @Autowired
    private ModelMapper modelMapper;

    //Get all project
    public List<ProjectDTO> getAllproject(){
        List<Project> projectList = projectRepo.findAll();
        return modelMapper.map(projectList, new TypeToken<ArrayList<ProjectDTO>>(){
        }.getType());
    }

    // Get project by projectID
    public ProjectDTO getProjectByID(String projectID) {
        Optional<Project> projectOptional = projectRepo.findById(projectID);
        Project project = projectOptional.orElse(null); // or handle it with a proper action
    
        return modelMapper.map(project, ProjectDTO.class);
    }

    // Save project object
    public String saveProject(ProjectDTO projectDTO){
        if (projectRepo.existsById(projectDTO.getProjectID())){  //check where there is going to save existing object
            return VarList.RSP_DUPLICATED;
        }
        else{
            projectRepo.save(modelMapper.map(projectDTO, Project.class));
            return VarList.RSP_SUCCESS;
        }
    }
    

    public List<Project> getProjectsByEnrollmentNo(String enrollmentNo){
        return projectRepo.findByStudentsEnrollmentNo(enrollmentNo);
    }

    public long getProjectCount(){
        return projectRepo.count();
    }

}
