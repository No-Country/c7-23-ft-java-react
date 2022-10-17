package com.miturno.models.dto;

import com.miturno.models.Turn;
import com.miturno.models.enums.DocumentType;
import lombok.Data;

import java.util.List;
@Data
public class PatientResponse {

    private Long idPatient;
    private String name;
    private String last_name;
    private DocumentType documentType;
    private Long document;
    private String phone;
    private String email;
    private String social_work;
    private String clinic_history;
    private List<Turn> turns;
}
