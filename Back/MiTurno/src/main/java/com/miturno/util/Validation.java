package com.miturno.util;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.models.User;
import com.miturno.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class Validation {

    @Autowired
    private UserRepository userRepo;

    public void validationEmail(String email) throws InvalidUserException {
        Optional<User> response = Optional.ofNullable(userRepo.findByEmail(email));
        if (response.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The email already exist");
        }
    }
    public void validationDocument(Long document) throws InvalidUserException {
        Optional<User> response = Optional.ofNullable(userRepo.findByDocument(document));
        if (response.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The document already exist");
        }
    }
}
