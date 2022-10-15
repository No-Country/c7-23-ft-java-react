package com.miturno.models.dto;

import com.miturno.models.Speciality;
import lombok.Data;

import java.time.DayOfWeek;
import java.util.List;

@Data
public class DoctorRegisterRequest {

    private String name;
    private String lastName;
    private String documentType;
    private Long document;
    private String email;
    private String password;

    private List<DayOfWeek> attentionDays;
    private List<Speciality> specialties;
}
