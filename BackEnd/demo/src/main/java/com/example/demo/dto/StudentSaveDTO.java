package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentSaveDTO {
    private String enrollmentNo;
    private String firstName;
    private String lastName;
    private String zScore;
    private String sex;
    private String address;
    private String guardianName;
    private String guardianTP;
    private String project1ID;
    private String project2ID;
    private String course1ID;
    private String course2ID;
    private String course3ID;
}
