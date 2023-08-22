package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TeacherSaveDTO {

    private String teacherID;
    private String name;
    private String departmentID;
    private String course1ID;
    private String course2ID;
}
