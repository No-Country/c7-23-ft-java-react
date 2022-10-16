package com.miturno.mapper;

import com.miturno.models.Turn;
import com.miturno.models.User;
import com.miturno.models.dto.TurnResponse;
import com.miturno.models.dto.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface TurnResponseMapper {
    @Mappings({

            @Mapping(target = "idTurn", source = "id"), //Invertir?
            @Mapping(target = "idDoctor", source = "doctor.id"),
            @Mapping(target = "idPatient", source = "patient.id")
    })
    public TurnResponse turnToTurnResponse(Turn turn);
    public Turn TurnResponseToTurn(TurnResponse turnResponse);

}
