package com.miturno.Service;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.User;
import java.util.List;

import com.sun.corba.se.impl.protocol.RequestCanceledException;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leonardo Terlizzi
 */

@Service
public interface UserService {
    
    public List<User> getUsers() throws NotFoundException;
    
    public User getUser(Long id) throws NotFoundException;
    
    public void saveUser(User user) throws InvalidUserException;
    
    public void deleteUser(Long id) throws NotFoundException;
    
    public void updateUser(User user) throws InvalidUserException;

    public void registerUser(User user) throws InvalidUserException;

    public User validationUser(User user) throws InvalidUserException, NotFoundException, RequestCanceledException;

    public void validationDocument (User user) throws InvalidUserException;

    public void validationMail(User user) throws InvalidUserException;
}
