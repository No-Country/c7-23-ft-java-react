package com.miturno.controller;

import com.miturno.Service.UserService;
import com.miturno.exceptions.InvalidUserException;
import com.miturno.exceptions.NotFoundException;
import com.miturno.models.User;
import java.util.List;
import javax.validation.Valid;
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
    
    @GetMapping("/users")
    @ResponseBody
    public List<User> getUsers() throws NotFoundException{
        return userServ.getUsers();
    }
    
    @GetMapping("/user")
    @ResponseBody
    public User getUser(Long id) throws NotFoundException{
        return userServ.getUser(id);
    }
    
    @PostMapping("/auth/register")
    public void registerUser(@Valid @RequestBody User user) throws InvalidUserException{
        userServ.saveUser(user);
        //falta implementación para añadir rol a usuario
    }
    
    @DeleteMapping("/user/delete")
    public void deleteUser(@RequestParam Long id) throws NotFoundException {
        userServ.deleteUser(id);
    }
    
    @PatchMapping("/user/update")
    public void updateUser(@RequestBody User user, @RequestParam Long id) throws InvalidUserException{
        user.setId(id);
        userServ.updateUser(user);
    }
    
}
