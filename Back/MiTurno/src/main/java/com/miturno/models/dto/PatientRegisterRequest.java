package com.miturno.models.dto;

import com.miturno.models.enums.DocumentTipe;
import lombok.Data;

@Data
public class PatientRegisterRequest {

    private String name;
    private String lastName;
    private DocumentTipe DocumentType;
    private Long document;
    private String email;
    private String phone;
    private boolean particular;
    private String social_work;
}
