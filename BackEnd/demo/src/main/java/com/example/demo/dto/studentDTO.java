package com.example.demo.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class studentDTO {

    private String enrollmentNo;
    private String firstName;
    private String lastName;
    private String zScore;
    private String sex;
    private String address;
    private String guardianName;
    private String guardianTP;

    
}
