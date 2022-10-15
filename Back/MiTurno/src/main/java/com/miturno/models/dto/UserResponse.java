package com.miturno.models.dto;


import lombok.Data;

@Data
public class UserResponse {

    private String rol;
    private Long id;
    private String fullName;
    private String documentType;
    private Long document;
    private String email;
}
