package com.miturno.mapper;

import com.miturno.models.User;
import com.miturno.models.dto.LoginRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "name", ignore = true),
            @Mapping(target = "lastName", ignore = true),
            @Mapping(target = "documentType", ignore = true),
            @Mapping(target = "email", ignore = true),
            @Mapping(target = "createAt", ignore = true),
            @Mapping(target = "updateAt", ignore = true),
            @Mapping(target = "deleted", ignore = true)
    })
    public User loginRequestToUser(LoginRequest loginRequest);
    public LoginRequest userToLoginRequest(User user);
}