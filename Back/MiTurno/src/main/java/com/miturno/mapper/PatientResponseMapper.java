package com.miturno.mapper;

import com.miturno.models.Patient;
import com.miturno.models.Turn;
import com.miturno.models.dto.PatientResponse;
import com.miturno.models.dto.TurnResponse;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface PatientResponseMapper {

    @Mappings({

            @Mapping(target = "idPatient", source = "id") //Invertir?

            //@Mapping(target = "idTurns", source = "turns.id"),
    })
    public PatientResponse patientToPatientResponse(Patient patient);
    public Patient patientResponseToPatient(PatientResponse patientResponse);
}
