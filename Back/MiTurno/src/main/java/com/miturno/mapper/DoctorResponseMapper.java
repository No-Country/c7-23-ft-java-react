package com.miturno.mapper;

import com.miturno.models.Doctor;
import com.miturno.models.dto.DoctorResponse;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface DoctorResponseMapper{


    public Doctor doctorResponseToDoctor(DoctorResponse doctorResponse);
    public DoctorResponse doctorToDoctorResponse(Doctor doctor);
}