package com.miturno.models.dto;

import lombok.Data;

@Data
public class UserRegisterRequest {

    private String name;
    private String lastName;
    private String documentType;
    private Long document;
    private String email;
    private String password;
}
