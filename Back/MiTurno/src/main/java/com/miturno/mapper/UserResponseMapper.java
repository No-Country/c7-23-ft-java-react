package com.miturno.mapper;

import com.miturno.models.User;
import com.miturno.models.dto.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.Qualifier;
import org.springframework.context.annotation.Primary;



@Mapper(componentModel = "spring")
public interface UserResponseMapper {

    @Mappings({
            @Mapping(target = "role", source = "role.roleName"),


    })
    public UserResponse userToUserResponse(User user);




}
