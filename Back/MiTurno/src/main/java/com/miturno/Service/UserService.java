package com.miturno.Service;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Role;
import com.miturno.models.User;

import java.util.List;

import com.miturno.models.dto.LoginRequest;
import com.miturno.models.dto.UserResponse;
import com.sun.corba.se.impl.protocol.RequestCanceledException;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leonardo Terlizzi
 */

@Service
public interface UserService {
    
    public List<UserResponse> getUsers() throws NotFoundException;
    
    public UserResponse getUser(Long id) throws NotFoundException;
    
    public void saveUser(User user) throws InvalidUserException;
    
    public void deleteUser(Long id) throws NotFoundException;
    
    public void updateUser(User user, Long id) throws InvalidUserException;

    public void registerUser(User user) throws InvalidUserException;

    public User validationUser(User user) throws InvalidUserException, NotFoundException, RequestCanceledException;
    
    public void addRoleToUser(User user, Role role) throws NotFoundException;

    public UserResponse validationUser(LoginRequest user) throws InvalidUserException, NotFoundException, RequestCanceledException;

}
