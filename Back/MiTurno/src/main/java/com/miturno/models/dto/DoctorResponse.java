package com.miturno.models.dto;

import com.miturno.models.Speciality;
import com.miturno.models.Turn;

import java.time.DayOfWeek;
import java.util.List;

public class DoctorResponse {

    private String rol;
    private Long id;
    private String fullName;
    private String DocumentType;
    private Long document;
    private String email;

    private List<Speciality> specialties;
    private List<DayOfWeek> attentionDays;
    private List<Integer> attentionTurn;
    private List<Turn> turns;
}
