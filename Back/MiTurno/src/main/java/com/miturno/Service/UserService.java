package com.miturno.Service;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.User;
import java.util.List;
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
    
}
