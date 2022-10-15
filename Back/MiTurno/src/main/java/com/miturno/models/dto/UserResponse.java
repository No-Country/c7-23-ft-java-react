package com.miturno.models.dto;


import lombok.Data;

@Data
public class UserResponse {

    private String roles;
    private Long id;
    private String name;
    private String lastName;
    private String documentType;
    private Long document;
    private String email;
    private Boolean deleted;
}
