package com.miturno.Service;
import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.User;
import com.miturno.repositories.UserRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.beans.ExceptionListener;
import java.util.List;
import java.util.Optional;
import com.sun.corba.se.impl.protocol.RequestCanceledException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;


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
    @Transactional
    public void registerUser(User user) throws InvalidUserException {
        validationDocument(user);
        validationMail(user);

        User newUser = new User();

        newUser = user;
        newUser.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        saveUser(newUser);
    }

    @Override
    public User validationUser(User user) throws InvalidUserException, NotFoundException, RequestCanceledException {
        Optional<User> response = Optional.ofNullable(userRepo.findByDocument(user.getDocument()));
            if (response.isPresent()) {
                User repoUser = response.get();
                if (new BCryptPasswordEncoder().matches(user.getPassword(), repoUser.getPassword())){
                    return repoUser;
                } else {
                    throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect password");
                }
            }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Document no exist");
    }

    @Override
    public void validationDocument(User user) throws InvalidUserException {
        Optional<User> response = Optional.ofNullable(userRepo.findByDocument(user.getDocument()));
            if (response.isPresent()){
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The document already exist");
            }
    }

    @Override
    public void validationMail(User user) throws InvalidUserException {
        Optional<User> response = Optional.ofNullable(userRepo.findByEmail(user.getEmail()));
        if (response.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The email already exist");
        }
    }


}
