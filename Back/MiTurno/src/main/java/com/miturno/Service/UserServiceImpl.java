package com.miturno.Service;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.User;
import com.miturno.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Leonardo Terlizzi
 */

@Service
public class UserServiceImpl implements UserService{
    
    @Autowired
    private UserRepository userRepo;
    
    @Override
    public List<User> getUsers() throws NotFoundException {
            return userRepo.findAll();
     }

    @Override
    public User getUser(Long id) throws NotFoundException{
        return userRepo.findById(id).orElse(null);
    }

    @Override
    public void saveUser(User user) throws InvalidUserException{
        userRepo.save(user);
    }

    @Override
    public void deleteUser(Long id) throws NotFoundException{
        userRepo.deleteById(id);
    }

    @Override
    public void updateUser(User user) throws InvalidUserException{
        userRepo.save(user);
    }
      
}
