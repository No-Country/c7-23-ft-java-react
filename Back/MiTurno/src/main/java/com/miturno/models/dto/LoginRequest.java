package com.miturno.models.dto;

import lombok.Data;

@Data
public class LoginRequest {

    String document;
    String password;
}
