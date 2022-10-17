package com.miturno.controller;

import com.miturno.Service.RoleService;
import com.miturno.Service.UserService;
import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.Role;
import com.miturno.models.User;
import java.util.List;
import java.util.Optional;
import javax.validation.Valid;

import com.miturno.models.dto.LoginRequest;
import com.miturno.models.dto.UserResponse;
import com.miturno.repositories.UserRepository;
import org.hibernate.validator.internal.engine.ConstraintViolationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Leonardo Terlizzi
 */

@RestController
public class UserController {
    
    @Autowired
    private UserService userServ;
    
    @Autowired
    private RoleService roleServ;
    @Autowired
    private UserRepository userRepo;
    
    @GetMapping("/users")
    @ResponseBody
    public List<UserResponse> getUsers() throws NotFoundException{
        return userServ.getUsers();
    }
    
    @GetMapping("/user")
    @ResponseBody
    public UserResponse getUser(@RequestParam Long id) throws NotFoundException{
        return userServ.getUser(id);
    }
    
    @PostMapping("/auth/register")
    public void registerUser(@Valid @RequestBody User user) throws InvalidUserException{
        userServ.registerUser(user);
        //falta implementación para añadir rol a usuario
    }
    
    @DeleteMapping("/user/delete")
    public void deleteUser(@RequestParam Long id) throws NotFoundException {
        userServ.deleteUser(id);
    }

    @PatchMapping("/user/update")
    public void updateUser(@Valid @RequestBody User user, @RequestParam Long id) throws InvalidUserException {
                userServ.updateUser(user, id);
    }

    @PostMapping("/auth/login")
    @ResponseBody
    public UserResponse login(@RequestBody LoginRequest user) throws InvalidUserException, NotFoundException {
        return userServ.validationUser(user);
    }
    
    @PatchMapping("user/role")
    public void addRoleToUser(@RequestParam Long user_id, @RequestParam Long role_id) throws NotFoundException{
        Role role = roleServ.getRole(role_id);

        Optional<User> response = userRepo.findById(user_id);
        User user = response.get();
        userServ.addRoleToUser(user, role);
    }
}
