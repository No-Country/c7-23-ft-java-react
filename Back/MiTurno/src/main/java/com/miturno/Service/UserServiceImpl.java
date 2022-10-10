package com.miturno.Service;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.User;
import com.miturno.repositories.UserRepository;

import java.beans.ExceptionListener;
import java.util.List;
import java.util.Optional;

import com.sun.corba.se.impl.protocol.RequestCanceledException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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

    @Override
    public User validationUser(User user) throws InvalidUserException, NotFoundException, RequestCanceledException {
        Optional<User> response = Optional.ofNullable(userRepo.findByDocument(user.getDocument()));
            if (response.isPresent()) {
                User repoUser = response.get();

                if (repoUser.getPassword().equals(user.getPassword())) {
                    return repoUser;
                } else {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect password");  //InvalidUserException("Bad password")
                }
            }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Document no exist");
    }
      
}
