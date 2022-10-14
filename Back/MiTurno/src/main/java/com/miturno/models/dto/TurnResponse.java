package com.miturno.models.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class TurnResponse {

    private Long idTurn;
    private Long idPatient;
    private Long idDoctor;
    private LocalDate day;
    private LocalTime hora;
}
