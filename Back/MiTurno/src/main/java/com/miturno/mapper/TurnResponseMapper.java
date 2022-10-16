package com.miturno.mapper;

import com.miturno.models.Turn;
import com.miturno.models.User;
import com.miturno.models.dto.TurnResponse;
import com.miturno.models.dto.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper
public interface TurnResponseMapper {
    @Mappings(value = {
            @Mapping(target = "avaible", ignore = true),
            @Mapping(target = "locked", ignore = true),
            @Mapping(target = "id", source = "idTurn"),
            @Mapping(target = "doctor.id", source = "idDoctor"),
            @Mapping(target = "patient.id", source = "idPatient")
    })
    public Turn TurnResponseToTurn(TurnResponse turnResponse);
    public TurnResponse turnToTurnResponse(Turn turn);
}
