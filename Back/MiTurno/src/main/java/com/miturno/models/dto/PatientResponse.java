package com.miturno.models.dto;

import lombok.Data;

@Data
public class PatientResponse {

    private Long id;
    private String fullName;
    private String documentType;
    private Long document;
    private String phone;
    private String email;
    private String social_work;
    private String clinic_history;
}
