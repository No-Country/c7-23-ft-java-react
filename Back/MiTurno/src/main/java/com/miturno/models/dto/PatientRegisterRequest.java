package com.miturno.models.dto;

import lombok.Data;

@Data
public class PatientRegisterRequest {

    private String name;
    private String lastName;
    private String documentType;
    private Long document;
    private String email;
    private String phone;
    private boolean particular;
    private String social_work;
}
