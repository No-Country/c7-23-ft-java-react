package com.miturno.Service;

import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;

import com.miturno.models.Role;

import com.miturno.mapper.UserResponseMapper;

import com.miturno.models.User;
import com.miturno.models.dto.LoginRequest;
import com.miturno.models.dto.UserResponse;
import com.miturno.repositories.UserRepository;
import com.miturno.util.Encrypter;
import com.miturno.util.Validation;
import com.sun.corba.se.impl.protocol.RequestCanceledException;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepo;
    
    @Autowired
    private Encrypter encrypter;
    @Autowired
    private UserResponseMapper mapper;

    @Autowired
    Validation validation;




    @Override
    public List<UserResponse> getUsers() throws NotFoundException {
        Optional<List<User>> listUsersOptional = Optional.ofNullable(userRepo.findAll());
        List<UserResponse> listUserResponse = new ArrayList<>();
        if (listUsersOptional.isPresent()){
            List<User> listUser = listUsersOptional.get();

            for (User user : listUser) {
                listUserResponse.add(mapper.userToUserResponse(user));
            }
            return listUserResponse;
        }else {
            return listUserResponse;
        }
    }


    @Override
    public UserResponse getUser(Long id) throws NotFoundException{
        Optional<User> response = userRepo.findById(id);

        if (response.isPresent()){
           UserResponse userResponse = mapper.userToUserResponse(response.get());
            return userResponse;
        }else {
            return mapper.userToUserResponse(response.get());
        }
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
    public void updateUser(User user, Long id) throws InvalidUserException {

        if (user.getPassword() == null || user.getPassword().isEmpty()){
            user.setPassword(userRepo.findById(id).get().getPassword());
        }else {

            if(!user.getPassword().equals(userRepo.findById(id).get().getPassword())){
                user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
            }
        }

        if (user.getDocumentType() == null){
            user.setDocumentType(userRepo.findById(id).get().getDocumentType());
        }

        if (user.getName() == null || user.getName().isEmpty()){
            user.setName(userRepo.findById(id).get().getName());
        }
        if ((user.getLastName() == null || user.getLastName().isEmpty())){
            user.setLastName(userRepo.findById(id).get().getLastName());
        }
        if (user.getDocument() == null){
            user.setDocument(userRepo.findById(id).get().getDocument());
        }else {
            validation.validationDocument(user.getDocument());
        }
        if (user.getEmail() == null || user.getEmail().isEmpty()){
            user.setEmail(userRepo.findById(id).get().getEmail());
        }else{
            validation.validationEmail(user.getEmail());
        }


        user.setId(id);

        userRepo.save(user);

    }

    @Override
    @Transactional
    public void registerUser(User user) throws InvalidUserException {

        validation.validationDocument(user.getDocument());
        validation.validationEmail(user.getEmail());

        user.setPassword(encrypter.EncrypterPassword(user.getPassword()));
        saveUser(user);
    }



    @Override
    public UserResponse validationUser(LoginRequest user) throws InvalidUserException, NotFoundException, RequestCanceledException {
        Optional<User> response = Optional.ofNullable(userRepo.findByDocument(Long.valueOf(user.getDocument())));
        if (response.isPresent()) {
            User repoUser = response.get();
            if (new BCryptPasswordEncoder().matches(user.getPassword(), repoUser.getPassword())){
                return mapper.userToUserResponse(repoUser);
            } else {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect password");
            }
        }
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Document no exist");
    }

    @Override
    public void addRoleToUser(User user, Role role) throws NotFoundException {
        user.setRole(role);
        userRepo.save(user);
        
    }


}
